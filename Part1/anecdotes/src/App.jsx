import { useState } from "react"


function App() {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
  // Estado para guardar la anecdota seleccionada
  const [selected, setSelected] = useState(0);
  // Estado para guardar los votos
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  
    // Funcion para votar una anecdota
    const handleVote = () =>{ 
     const copy = [...points];
      copy[selected] += 1
      setPoints(copy)
    }
  
    // Funccion para generar una anecdota aleatorio
  const handleClick = () => (
      setSelected(Math.floor(Math.random()*anecdotes.length) )
  )

    // Funcion para encontrar la anecdota con mas votos
    const mostVoted = () => {
    let max = 0;
    let index = 0;
    for(let i = 0; i < points.length; i++){
      if(points[i] > max ){
        max = points[i];
        index = i;
      }
    }
    return index
    }



  return (
    <>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>Has { points[selected]} votes</p>
      <button onClick={handleVote }>vote</button>
      <button onClick={handleClick}>Next anecdote</button>
      <h2>Anecdotes with most votes </h2>
      {anecdotes[mostVoted()]}
      <p>Has {points[mostVoted()]} votes</p>
    </>
  )
}

export default App
