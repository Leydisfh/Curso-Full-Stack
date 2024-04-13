
import { useEffect, useState } from 'react'
import  data from './services/countries'
import CountryDetails from './CountryDetails'


function App() {
const [search, setSearch] = useState('')
const [countries, setCountries] = useState(null)

const handleChange = (e) => {
  setSearch(e.target.value)
}
useEffect(() => {
  data.getCountries(search)
        .then(data=>{
          setCountries(data.data)
        })
        .catch(err=>console.log(err))
},[search])

if(!countries ){
  return null 
}

const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

const showInfo = ()=>{
  if(filteredCountries.length>10){
    return <p>Too many matches, specify another filter</p>
  }
  if(filteredCountries.length===1){
    return <CountryDetails country={filteredCountries[0]} />
  }
  else{
    return filteredCountries.map(country => <li key={country.cca3}>
    {country.name.common}
    <button>show</button> 
    </li>)
  }
}

// mi api key es 68b4205ed8ea81fbeed7c0c86b48cb86

// Me falta el ejercicio 2.19
  return (
    <>
    <label>
      find countries <input type='text' onChange={handleChange}/>
    </label>
    <ul>
      { showInfo()}
    </ul>
  
    </>
  )
  
}

export default App


