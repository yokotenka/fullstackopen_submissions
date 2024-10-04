import { useState } from 'react'


const ChangeAnecdoteButton = ({ setSelected }) => {

  const setToSelected = () => {
    const randInt = Math.floor(Math.random() * 7); // Generate random number here, on click
    setSelected(randInt);
  }

  return (
      <button onClick={setToSelected}>next anecdote</button>
  )
}

const VoteButton = ({votes, selected, setVotes, max, setMax}) => {
  
  const setToVotes = () => {
    votes[selected] += 1
    setVotes(votes)
    if (votes[selected] > max[1] || max[0] == selected){
      setMax([selected, votes[selected]])
    } 
  }
  
  return (
      <button onClick={setToVotes}>vote</button>
  )
}

const Display = ({text, nvotes}) => {
  return(
  <div><div>
    {text} 
  </div>has {nvotes} votes
  </div>)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0])
  const [selected, setSelected] = useState(0); 
  const [max, setMax] = useState([0, 0])
  
  const copy = [...points]
  
  
  return (
    <div>
      <h1>
        Anecdote of the day
      </h1>
      <Display text={anecdotes[selected]} nvotes={copy[selected]} />
      <div>
      <VoteButton votes={copy} selected={selected} setVotes={setPoints} max={max} setMax={setMax} /> 
      <ChangeAnecdoteButton setSelected={setSelected} />
      </div>
      <h1>Anecdote with most votes</h1>
      <Display text={anecdotes[max[0]]} nvotes={max[1]} />
    </div>
  )
}

export default App;


// what was wrong with this one? The random number generation happened outside of the onClick.
// Which meant that when the randomInt was the same as the current state, the page won't rerender. So the randInt will stay the same
// forever. The button keeps trying to set the state to the same value hence never rerendering the page anymore.
// const Button = ({currSelected, newSelected, setSelected}) => {
  
//   const setToSelected = ({selected1, selected2, setSelected}) => () => {

//     setSelected(newSelected)
    
//   }
  
//   return ( <div> 
//     <button onClick={setToSelected({selected1:currSelected, selected2:newSelected, setSelected:setSelected})}>next anecdote</button>
//     </div>
//     )
// }


// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often.',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
//   ]

//   const [selected, setSelected] = useState(0)
  
//   const randInt = Math.floor(Math.random() * anecdotes.length)
//   console.log(selected, randInt)

  

//   return (
//     <div>
//       {anecdotes[selected]}
//       <Button currSelected={selected} newSelected={randInt} setSelected={setSelected} />
//     </div>
//   )
// }

// export default App