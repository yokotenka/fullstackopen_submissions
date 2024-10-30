import { useState, useEffect } from 'react'
import serverService from './services/server'
import Search from './components/Search'

function App() {
  const [countries, setCountries] = useState([])


  useEffect(() => {
    serverService.getAll()
    .then(response => {
        console.log(response.map(item => ({...item, show: true})))
        setCountries(response.map(item => ({...item, show: true})))
      })
  }, [])
  console.log(countries)

  return (
    <div>
      <Search countries={countries} />
    </div>
  )
}

export default App
