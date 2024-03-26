export const Persons = ({search, newName, persons,isNameRepeated,filteredNames } ) =>{
   

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
)
}