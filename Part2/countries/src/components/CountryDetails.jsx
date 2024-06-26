import  data from '../services/weather';
import { useEffect, useState } from 'react';  
import WeatherDetails from './WeatherDetails';


const CountryDetails = ({ country}) => {
    const [weather, setWeather] = useState(null);

   
    // get weather data
    useEffect(()=>{
    data.getWeather(country.capital[0])
    .then(data=>{
      setWeather(data.data)
    })
    .catch( () =>console.log('Weather data not available'))
    },[country.capital])

   return(
    <>
     <li key={country.cca3}>
        <h2>{country.name.common}</h2>
        <p>capital {country.capital[0]}</p>
        <p>area{country.area} </p>
        <h3>languages:</h3>
        <ul>
        {Object.values(country.languages).map(lang => <li key={lang}>{lang} </li>)}
        </ul>
        <br/>
        <img src={country.flags.png} alt={country.flags.alt} width='100px' height='80px'/>
        <WeatherDetails country={country} weather={weather} />
   </li>
    </>
   )
}

export default CountryDetails