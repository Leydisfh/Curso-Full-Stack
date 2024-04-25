const Buttons = ({name, onClick}) =>{
    return(
        <button onClick={onClick} >
            {name}
        </button>
    )
}

export default Buttons