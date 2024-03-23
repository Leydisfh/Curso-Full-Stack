

const Total = ({parts}) =>{ 
    let totals = parts.reduce((sum, part) => sum + part.exercises, 0);
    return(
    <p>
         total of {totals} exercises
    </p> 
    )

}


export default Total