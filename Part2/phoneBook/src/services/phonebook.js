import axios from "axios";
const url = "http://localhost:3001/persons";

const getAll = () =>{
    return axios.get(url)
}

const create = (newObject) =>{
    return axios.post(url, newObject)
}

 const remove = (id) =>{
    return axios.delete(`${url}/${id}`)
 }



export default {getAll, create, remove}