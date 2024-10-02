


const Header = (props) => {
  return(
  <h1>
        {props.course}
    </h1>)
}

const Part = (props) => {
  return(<p>{props.name} {props.num}</p>)
}

const Content = (props) => {
  console.log(props.parts[0])
  return(
  <div>
    <Part name={props.parts[0].name} num={props.parts[0].exercises} />
    <Part name={props.parts[1].name} num={props.parts[1].exercises} />
    <Part name={props.parts[2].name} num={props.parts[2].exercises} />
  </div>)
}

const Total = (props) => {
  return(<p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}


// // variables
// const x = 1
// let y = 5

// console.log(x, y)   // 1, 5 est affiché
// y += 10
// console.log(x, y)   // 1, 15 est affiché
// y = 'sometext'
// console.log(x, y)   // 1, sometext est affiché
// // x = 4               // provoque une erreur


// // arrays
// console.log("Arrays")

// const t = [1, -1, 3]
// console.log("Const array before push", t)
// t.push(5)

// console.log("Length of array after push", t.length) // 4 est affiché
// console.log("First element of array", t[1])     // -1 est affiché
// console.log("Iterate through each element")
// t.forEach(value => {
//   console.log(value)  // les chiffres 1, -1, 3, 5 sont affichés, chacun sur une ligne
// })    


// console.log("Concat behaviour")
// const t1 = [1, -1, 3]
// const t2 = t.concat(5)

// console.log("The original array", t1)  // [1, -1, 3] est affiché
// console.log("After concat", t2) // [1, -1, 3, 5] est affiché


// console.log("Map behaviour")
// console.log(t)
// const m1 = t.map(value => value * 2)
// console.log(m1)   // [2, 4, 6] est affiché

// console.log("Changing array to array of HTML Strings")
// const m2 = t.map(value => '<li>' + value + '</li>')
// console.log(m2)  
// // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] est affiché

// console.log("destructuring array")
// const t4 = [1,2,3,4,5]
// const [first, second, ...rest] = t4
// console.log(first, second)  // 1, 2 est affiché
// console.log(rest)          // [3, 4, 5] est affiché

// console.log("Other methods to define functions")
// function product(a, b) {
//   return a * b
// }

// const result1 = product(2, 6)
// // result est maintenant 12

// const average = function(a, b) {
//   return (a + b) / 2
// }

// const result2 = average(2, 5)
// // result est maintenant 3.5

export default App