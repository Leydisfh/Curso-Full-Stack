import { useEffect, useState } from 'react';
import { PersonForm } from './PersonForm';
import {Filter} from './Filter';
import { Persons } from './Persons';
import phonebookService from './services/phonebook';

function App() {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    phonebookService.getAll()
    .then(response => {
      setPersons(response.data)
    })
  },[]);


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
          phone: newPhone
    }
    phonebookService.create(newPerson)
    .then(response=> {
      setPersons(persons.concat(response.data))
      setNewName('');
      setNewPhone('');
    })
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
