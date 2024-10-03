import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// const Hello = (props) => {
//   return (
//     <div>
//       <p>

//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   )
// }

// const Footer = () => {
//   return (
//     <div>
//       greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
//     </div>
//   )
// }

// const App = () => {

//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="John" age={9} />
//       <Hello name="Maya" age={26 + 10} />
//       <Footer />
//     </div>
//   )
// }

//section C
// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }


// const App = (props) => {
//   const {counter} = props
//   return (
//     <div>{counter}</div>
//   )
// }



// export default App

// stateful compenent 
// const App = () => {
  
//   // userState. The initial value is ignored in all subsequent calls. Only used during the initial call.
//   // setCounter function will rerender the component that it is housed in.
//   const [ counter, setCounter ] = useState(0)
//   console.log('called', counter)
//   setTimeout(
//     () => setCounter(counter + 1),
//     1000
//   )
//   console.log('rendering...', counter)
//   return (
//     <div>{counter}</div>
//   )
// }

// const Display = ({ counter }) => <div>{counter}</div>
// const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)

//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter}/>

//       <Button
//         onClick={increaseByOne}
//         text='plus'
//       />
//       <Button
//         onClick={setToZero}
//         text='zero'
//       />     
//       <Button
//         onClick={decreaseByOne}
//         text='minus'
//       />           
//     </div>
//   )
// }

// const App = () => {
//   // Here, it is actually bad practice to stock everything in one object. It is better to separate the states 
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const handleLeftClick = () =>
//     setClicks({ ...clicks, left: clicks.left + 1 })
  
//   const handleRightClick = () =>
//     setClicks({ ...clicks, right: clicks.right + 1 })

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }

// state is basically just a global element which can be accessed by that compartment and all of its children.





const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }


  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => () => {
    console.log('value now', newValue)  // affiche la nouvelle valeur sur la console
    setValue(newValue)
  }


  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
      <p>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
      </p>
    </div>
  )
}


export default App

