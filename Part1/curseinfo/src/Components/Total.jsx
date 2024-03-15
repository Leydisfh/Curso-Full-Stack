


const Total = ({parts}) =>{ 

    let totals = parts.reduce((total, part) => total + part.exercises ,0)
    return(
    <p>
    Number of exercises {totals}
</p>
)}


export default Total