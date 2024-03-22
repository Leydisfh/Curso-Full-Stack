import Header from '../Components/Header';
import Content from '../Components/Content';
import Total  from '../Components/Total';

const Course =({course}) =>{
    return (
        <div>
            <Header course = {course}/>
            <Content  course = {course}/>
            <Total course = {course}/> 
        </div>
    )
}

export default Course;