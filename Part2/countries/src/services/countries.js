import axios from 'axios';

const url = `https://studies.cs.helsinki.fi/restcountries/api`;

const getCountries = () => {
    return axios.get(`${url}/all`)
}

export default { getCountries }