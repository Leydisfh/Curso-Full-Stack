import  { useState } from 'react';
import Buttons from "./assets/Components/Buttons";
import Statistics from './assets/Components/Statistics';
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0) ;
  
  // calculos de estadisticas
  let total = good + neutral + bad;
  let average =  (good - bad) / total ;
  average = average ? average : 0
  let positive = (good / total) * 100;
  positive = positive ? positive : 0

  return (
    <div>
     <h2>Give feedback</h2>
      <Buttons name={'good'} onClick={()=> setGood ( good + 1) } />
      <Buttons name={'neutral'}  onClick={()=> setNeutral (neutral + 1)} />
      <Buttons name={'bad'}  onClick={()=> setBad (bad + 1)}/>
      <h2>Statistics</h2>
      {
      total === 0 
      ? <p>No feedback given</p> 
      :  <Statistics good={good}
            neutral={neutral}
            bad={bad} 
            average={average} 
            positive={positive}
            total={total}
            />
    }

    </div>
  )
}

export default App
