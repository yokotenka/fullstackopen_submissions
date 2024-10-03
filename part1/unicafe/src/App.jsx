import { useState } from 'react'




const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>
const ShowStats = ({text, number}) => <div>{text} {number}</div>

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
      <h1>statistics</h1>
      <ShowStats text="good" number={good} />
      <ShowStats text="neutral" number={neutral} />
      <ShowStats text="bad" number={bad} />
    </div>
  )
}

export default App