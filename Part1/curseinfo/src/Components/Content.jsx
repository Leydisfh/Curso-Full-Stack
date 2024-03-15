import Part from './Part'

const Content = ({parts}) => {

  return (
    <>
    {parts.map(element => {
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
