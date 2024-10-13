import { useState } from 'react'
import DisplayNumbers from './components/DisplayNumbers'
import AddNumber from './components/AddNumber'
import SearchNumber from './components/SearchNumber'

const App = () => {
  const defaultArray = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]
  const [persons, setPersons] = useState(defaultArray)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showPersons, setShowPersons] = useState(defaultArray)

  return (
    <div>
      <SearchNumber
        persons={persons} setShowPersons={setShowPersons}
      />
      <AddNumber 
        persons={persons} setPersons={setPersons} 
        newName={newName} setNewName={setNewName} 
        newNumber={newNumber} setNewNumber={setNewNumber} 
      />
      <DisplayNumbers persons={showPersons}/>
    </div>
  )
}

export default App