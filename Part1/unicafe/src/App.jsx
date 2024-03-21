import  { useState } from 'react';
import Buttons from "./assets/Components/Buttons"
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0) ;
  
  // calculos de estadisticas
  let total = good + neutral + bad;
  let average =  (good - bad) / total ;
  let positive = (good / total) * 100;

  return (
    <div>
     <h2>Give feedback</h2>
      <Buttons name={'good'} onClick={()=> setGood ( good + 1) } />
      <Buttons name={'neutral'}  onClick={()=> setNeutral (neutral + 1)} />
      <Buttons name={'bad'}  onClick={()=> setBad (bad + 1)}/>
      <h2>Statistics</h2>
      <p>Good: { good }</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total} </p>
      <p>Averange: { average ? average : 0 }  </p>
      <p>Positive: { positive ? positive : 0} % </p>
    </div>
  )
}

export default App
