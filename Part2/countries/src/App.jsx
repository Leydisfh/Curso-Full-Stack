
import { useEffect, useState } from 'react'
import  data from './services/countries'


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
    return filteredCountries.map(country => <li key={country.cca3}>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital[0]}</p>
      <p>area{country.area} </p>
      <h3>languages:</h3>
      <ul>
        {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
      </ul>
      <br/>
      <img src={country.flags.png} alt={country.flags.alt} width='100px' height='80px'/>
     </li>)
  }
  else{
   return filteredCountries.map(country => <li key={country.cca3}>{country.name.common} </li>)
  }
}
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


