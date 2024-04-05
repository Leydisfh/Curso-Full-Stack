export const PersonList = ({search, newName, persons,isNameRepeated,filteredNames, removePersone } ) =>{
   
  const handleRemovePersone = (id) => {
    return () =>{
      removePersone(id)
    }
  }
  
  const handleAlert = () =>{
    alert(`${newName} is already added to phonebook`)
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
              <button onClick={ handleRemovePersone(person.id) }>delete</button>
            </li>))
          )}
        
        {isNameRepeated(newName) && handleAlert()}
      </ul>
)
}