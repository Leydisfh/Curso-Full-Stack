import { useState } from 'react';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [search, setSearch] = useState('');


// Funciones
  const handleChange = (e) => {
    setNewName(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newPerson = {
          name: newName,
          phone: newPhone,
          id: persons.length + 1
    }
    setPersons([...persons, newPerson])
    setNewName('');
    setNewPhone('');
  }

  const isNameRepeated = (name) => {
    return persons.filter(person => person.name === name).length > 0
  }

  // Filtrando nombres
  const filteredNames = persons.filter(person => person.name.includes(search));

  return (
    <>
      <h1>Phonebook</h1>
      <div>
        <p>
          filter shown with: 
          <input type='text'
          value={search}
          onChange={ (e) => setSearch(e.target.value)}
           />
          </p>
      </div>
      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type='text' 
                value={newName}
                onChange={handleChange} 
                />

        </div>
        <div>
          phone:<input type='tel'
          value={newPhone.toString()}
          onChange= {(e) => setNewPhone(e.target.value) }  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <ul>
        { search === ''
        ?
          isNameRepeated(newName) 
            ? alert(`${newName} is already added to phonebook`)
            :persons.map(person =>( 
            <li 
              key={person.id}>
              {person.name} {' '}
              {person.phone}
            </li>)
        )
        :
          filteredNames.map(person => (
            <li 
              key={person.id}>
              {person.name} {' '}
              {person.phone}
            </li>
          ))
      }
      </ul>
    </>
  )
}

export default App
