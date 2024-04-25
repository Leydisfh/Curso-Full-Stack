import { useState } from "react"

export const PersonList = ({search, newName, persons,isNameRepeated,filteredNames, removePersone } ) =>{
  const [alertShow, setAlertShow] = useState(false)
   
  
  const handleAlert = () =>{  
      alert(`${newName} is already added to phonebook`)
      setAlertShow(true)
  
  }


    return(
    <ul>
        { search !== ''
        ? (
          filteredNames.map(person => (
          <li key={person.id}>
              {person.name} {person.phone} 
            </li>
          ))
          ) :( 
            persons.map(person =>( 
            <li key={person.id}>
              {person.name} {person.phone} {' '}
              <button onClick={ removePersone(person.id) }>delete</button>
            </li>))
          )}
       
        { isNameRepeated(newName) && !alertShow && handleAlert() }
      </ul>
)
}