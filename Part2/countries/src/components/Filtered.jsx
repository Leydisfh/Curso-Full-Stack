
const Filtered = ({ country, handleShow }) => {
   

    return(
        <li> {country}
        <button onClick={handleShow}>show</button> 
        </li>
    )
}

export default Filtered