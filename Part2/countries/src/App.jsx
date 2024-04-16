
import { useEffect, useState } from 'react'
import  data from './services/countries'
import CountryDetails from './components/CountryDetails';
import Filtered from './components/Filtered.jsx';


function App() {
const [search, setSearch] = useState('')
const [countries, setCountries] = useState(null);
const [show, setShow] = useState(false)


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

const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));


const showInfo = ()=>{
  if(filteredCountries.length>10){
    return <p>Too many matches, specify another filter</p>
  }
  if(filteredCountries.length===1){
    return <CountryDetails country={filteredCountries[0]} />
  }
  else{
    return filteredCountries.map(country => 
      <Filtered key={country.name.common} country={country.name.common} handleShow={handleShow(country)} />
      )
  }
}
const handleShow = (country) => () => {
    setShow(country.name.common)
}

  return (
    <>
    <label>
      find countries <input type='text' onChange={handleChange}/>
    </label>
    <ul>
      { showInfo()}
      {show && <CountryDetails country={countries.find(country => country.name.common === show)} />}
    </ul>
 
    </>
  )
  
}

export default App


