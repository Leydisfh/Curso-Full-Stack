import { useEffect, useState } from 'react';
import {AddPerson } from './AddPerson';
import {Filter} from './Filter';
import { PersonList } from './PersonList';
import phonebookService from './services/phonebook';
import { Notification } from './Notification';



function App() {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState( null );
  const [error, setError] = useState(null);



  const existingPersons = persons.find(person => person.name === newName);
  const filteredNames = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));
  
  useEffect(() => {
    phonebookService.getAll()
    .then(response => {
      setPersons(response.data)
    })
    .catch(error => console.log(error))
  },[]);
  
  
  // Funciones
  const isNameRepeated = (name) => persons.filter(person => person.name === name).length > 0

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
  
    if(existingPersons){
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const id = existingPersons.id;
        const changedPerson = {...existingPersons, phone: newPhone}
        phonebookService.update(id, changedPerson)
        .then(response => {
          setPersons(persons.map(person =>( person.id !== id ? person : response.data)))
          setNewName('');
          setNewPhone('');
          setMessage(`Phone number of ${newName} has been updated`)
          setTimeout(() => {
            setMessage(null)
          },5000)
        })
        .catch(error =>{
          setError(`Error, information of ${newName} has already been removed from server`)
          setTimeout(() => {
            setError(null)
          },5000)
          setPersons(persons.filter(person => person.id !== id))
        })
      }
    }else{
      phonebookService.create(newPerson)
      .then(response=> {
        setPersons(persons.concat(response.data))
        setNewName('');
        setNewPhone('');
        setMessage(`Added ${newName}`)
        setTimeout(() => {
          setMessage(null)
        },5000)
      })
      .catch(error =>console.log(error)) 
}
  }

  const removePersone = (id) => {
    return () => {
      const person = persons.find(person => person.id === id)
      if(window.confirm(`Do you really want to delete ${ person.name }?`))
      phonebookService.remove(id)
      .then(response => {
        setPersons(prevPersons => prevPersons.filter(person => person.id !== id))
      })
      .catch(error => console.log(error))
    }
  }
 



  return (
    <>
      <h1>Phonebook</h1>
      <Notification  message={message}/>
      <Notification  message={error} />
      <Filter  onChange={ (e) => setSearch(e.target.value)}
                search={search}/>
      
      <h2>Add a new</h2>
      <AddPerson onSubmit={handleSubmit}
                  handleChange = {handleChange}
                  handleChangePhone = {handleChangePhone}
                  newName = {newName}
                  newPhone = {newPhone}
                  />
      
      <h2>Numbers</h2>
        <PersonList search = {search}
         newName = {newName} 
         persons = {persons}
         isNameRepeated = {isNameRepeated}
         filteredNames = {filteredNames}
          removePersone = {removePersone }
          />
      
    </>
  )
}

export default App
