import { useState } from 'react';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


// Funciones
  const handleChange = (e) => {
    setNewName(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newPerson = {
          name: newName
    }
    setPersons([...persons, newPerson])
    setNewName('');
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        { isNameRepeated(newName) 
            ? alert(`${newName} is already added to phonebook`)
            :persons.map(person =>{
            return <li key={person.name}>
                      {person.name}
                  </li>
        })}
        
      </ul>
    </>
  )
}

export default App
