import { useState } from 'react'


const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>
const ShowStats = ({text, number}) => <tr><td>{text}</td><td>{number}</td></tr>


// composant pour les statistics
const Statistics = ({good, neutral, bad}) => {
  const total = good+bad+neutral
  
  if (total==0){
    return <div><h1>statistics</h1>No feedback given</div>
  }
  
  const calculateAverage = () => {
    if (total == 0) {
      return 0
    }
    return (good - bad)/total
  }
  const positiveResponse = () => {
    if (total==0){
      return "undefined"
    }

    return ((good/total) * 100) + " %"
  }
  return (
  <div>
    <h1>statistics</h1>
    <table>
      <tbody><ShowStats text="good" number={good} />
    <ShowStats text="neutral" number={neutral} />
    <ShowStats text="bad" number={bad} />
    <ShowStats text="all" number={good+neutral+bad} />
    <ShowStats text="average" number={calculateAverage()} />
    <ShowStats text="positive" number={positiveResponse()} />
    </tbody>
    </table>
  </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const setToValue = ({value, setValue}) => () => setValue(value)

  return (
    <div>
      <h1>give feedback</h1>
      <p>
      <Button text="good" onClick={setToValue({value : good+1, setValue : setGood})} />
      <Button text="neutral" onClick={setToValue({value : neutral+1, setValue : setNeutral})} />
      <Button text="bad" onClick={setToValue({value : bad+1, setValue : setBad})} />
      </p>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App