import { useState } from 'react';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phone: '123456789'}
  ]) 
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');


// Funciones
  const handleChange = (e) => {
    setNewName(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newPerson = {
          name: newName,
          phone: newPhone
    }
    setPersons([...persons, newPerson])
    setNewName('');
    setNewPhone('');
  }

  const isNameRepeated = (name) => {
    return persons.filter(person => person.name === name).length > 0
  }

  return (
    <>
      <h2>Phonebook</h2>
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
        { isNameRepeated(newName) 
            ? alert(`${newName} is already added to phonebook`)
            :persons.map(person =>{
            return <li key={person.name}>
                      {person.name} {' '}
                      {person.phone}
                  </li>
        })}
        
      </ul>
    </>
  )
}

export default App
