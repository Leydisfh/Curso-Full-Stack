import Header from '../Components/Header';
import Content from '../Components/Content';


const Course =({courses}) =>{
    return (
        <div>
            <Header courses = {courses}/>
            <Content  courses = {courses}/> 
        </div>
    )
}

export default Course;