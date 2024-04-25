import axios from 'axios';
const api_key = import.meta.env.VITE_API_KEY

const getWeather = (city) =>{
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
}

const getIcon = (icon) => {
    return  axios.get( `https://openweathermap.org/img/wn/${icon}.png`)
}

export default { getWeather, getIcon }