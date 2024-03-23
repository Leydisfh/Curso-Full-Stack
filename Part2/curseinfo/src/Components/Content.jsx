import Part from './Part'
import Total from './Total';
const Content = ({courses}) => {
  
  return (
    <>
   {courses.map((course)=>{
      return(
        <div key={course.id}>
          <h2>{course.name}</h2>
          {course.parts.map((element)=>{
            return(
              <Part key={element.id} 
              name={element.name} 
              exercises={element.exercises}/>
            )
          })}
         <Total parts={course.parts}/>
        </div>
      )
   })}
    </>
  );
};

export default Content;
