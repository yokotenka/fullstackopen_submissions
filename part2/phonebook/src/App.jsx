import { useState, useEffect } from 'react'
import DisplayNumbers from './components/DisplayNumbers'
import AddNumber from './components/AddNumber'
import SearchNumber from './components/SearchNumber'

import serverService from './services/server'

const App = () => {
  
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    serverService.getAll()
    .then(response => {
        console.log(response.map(item => ({...item, show: true})))
        setPersons(response.map(item => ({...item, show: true})))
      })
  }, [])

  return (
    <div>
      <SearchNumber
        persons={persons} setPersons={setPersons} search={search} setSearch={setSearch}
      />
      <AddNumber 
        persons={persons} setPersons={setPersons} search={search}
      />
      <DisplayNumbers persons={persons} setPersons={setPersons}/>
    </div>
  )
}

export default App