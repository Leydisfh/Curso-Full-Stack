import { useEffect, useState} from "react"
import data from './services/weather'

const WeatherDetails = ({ country, weather }) => {
  
     const [icon, setIcon] = useState(null);
     
     
     useEffect(()=>{
        if(weather && weather.weather[0]){
            const idIcon = weather.weather[0].icon;
            data.getIcon(idIcon)
            .then(response=>{
                setIcon(response.config.url)
            })
            .catch(err=>console.log(err))
        }
        },[weather])
        
       
    
    
    // convert kelvin to celcius
    const kelvinCelcius = () =>{ 
        if(weather && weather.main){
            const kelvin = weather.main.temp
            const temperature = kelvin - 273.15
            return temperature.toFixed(2)
        }
        }
    return(
        <div>
            <h3>Weather in {country.capital[0]}</h3>
            <p>temperature: {kelvinCelcius()} Celcius </p>
            <img src={icon} alt='weather icon'/>
            <p>wind: {weather && weather.wind.speed} m/s</p>
            
        </div>
    )
}

export default WeatherDetails