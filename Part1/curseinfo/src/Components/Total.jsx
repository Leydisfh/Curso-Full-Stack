


const Total = ({course}) =>{ 

    let totals = course.parts.reduce((total, part) => total + part.exercises ,0)
    return(
    <p>
    Number of exercises {totals}
</p>
)}


export default Total