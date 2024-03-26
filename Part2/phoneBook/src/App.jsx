import { useState } from 'react';
import { PersonForm } from './PersonForm';
import {Filter} from './Filter';
import { Persons } from './Persons';

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
  const handleChangePhone = (e) => {
    setNewPhone(e.target.value)
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
  const filteredNames = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));
  

  return (
    <>
      <h1>Phonebook</h1>
      <Filter  onChange={ (e) => setSearch(e.target.value)}
                search={search}/>
      
      <h2>Add a new</h2>
      <PersonForm onSubmit={handleSubmit}
                  handleChange = {handleChange}
                  handleChangePhone = {handleChangePhone}
                  newName = {newName}
                  newPhone = {newPhone}
                  />
      
      <h2>Numbers</h2>
        <Persons search = {search}
         newName = {newName} 
         persons = {persons}
         isNameRepeated = {isNameRepeated}
         filteredNames = {filteredNames}
          />
      
    </>
  )
}

export default App
