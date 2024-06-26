const express = require('express');
const morgan = require('morgan')
const app = express();


let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const generateId = () => {
  const maxId = persons.length > 0
  ? Math.max(...persons.map(n => n.id))
  : 0
  return maxId + 1
}
// Middleware
morgan.token('body', (req, res)=> JSON.stringify(req.body))
app.use(morgan(':method : url: status :res[content-length] - :response-time ms :body'))

app.use(express.json())
app.use(express.static('dist'))

// Rutas de la aplicación
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/persons', (req, res)=>{
    res.json(persons)
})
app.get('/info', (req, res)=>{
  const date = new Date()
  res.send(`<p>Phonebook has info for ${persons.length} people</p> ` + date)
})

app.get('/api/persons/:id', (req, resp)=>{
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  if(person){
    resp.json(person)
  }
  else{
    resp.status(404).end()
    }
})

app.post('/api/persons', (req, resp)=>{
  const body = req.body;
  if(!body.name || !body.number){
    return resp.status(400).json({
      error:'name or number missing'
    })
  }
  if(persons.find(person=> person.name === body.name)){
    return resp.status(400).json({
      error:'name must be unique'
    })
  }
  const person ={
    name: body.name,
    number: body.number,
    id: generateId()
  }
  persons = persons.concat(person)
  resp.json(person)
})


app.delete('/api/persons/:id', (req, resp)=>{
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  resp.status(204).end()
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});