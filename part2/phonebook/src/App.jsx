import { useState, useEffect } from 'react'
import DisplayNumbers from './components/DisplayNumbers'
import AddNumber from './components/AddNumber'
import SearchNumber from './components/SearchNumber'
import Notification from './components/Notification'
import serverService from './services/server'

const App = () => {
  
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')
  const [headerMessage, setHeaderMessage] = useState(['',''])

  useEffect(() => {
    serverService.getAll()
    .then(response => {
        console.log(response.map(item => ({...item, show: true})))
        setPersons(response.map(item => ({...item, show: true})))
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={headerMessage[0]} className={headerMessage[1]}/>
      <SearchNumber
        persons={persons} setPersons={setPersons} 
        search={search} setSearch={setSearch}
      />
      <AddNumber 
        persons={persons} setPersons={setPersons} search={search} setHeaderMessage={setHeaderMessage}
      />
      <DisplayNumbers persons={persons} setPersons={setPersons} setHeaderMessage={setHeaderMessage}/>
    </div>
  )
}

export default App