import Part from './Part'

const Content = ({course}) => {

  return (
    <>
    {course.parts.map(element => {
      return(
       <Part  key={element.name} 
              name = {element.name} 
              exercises={element.exercises}/>
             )
    })}
    </>
  );
};

export default Content;
