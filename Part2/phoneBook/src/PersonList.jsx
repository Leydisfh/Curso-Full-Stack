export const PersonList = ({search, newName, persons,isNameRepeated,filteredNames, removePersone } ) =>{
   

    return(
    <ul>
        { search === ''
        ?
          isNameRepeated(newName) 
            ? alert(`${newName} is already added to phonebook`)
            :persons.map(person =>( 
            <li 
              key={person.id}>
              {person.name} {' '}
              {person.phone} {' '}
              <button onClick={ removePersone(person.id) }>delete</button>
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
)
}