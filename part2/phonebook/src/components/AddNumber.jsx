/**
 * Summary. 
 * AddNumber component is responsible for the form used to add new numbers to the 
 * persons array. 
 */

import { useState } from 'react'
import serverService from '../services/server'

const AddNumber = ({persons, setPersons, search, setHeaderMessage})=> {
    
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const add = (event) => {
        
        // important step
        event.preventDefault()
        const newObject = {
          name: newName,
          number: newNumber
        }
        const sameName = persons.find(item => item.name === newName)
        const sameNumber = persons.find(item => item.number === newNumber)
        console.log(sameName, sameNumber)
        const isNewName = !(sameName !== undefined)
        const isNewNumber = !(sameNumber !== undefined)
        console.log(isNewName, isNewNumber)
        let replaceOldNumber = false
        let replaceOldName = false

        if (!isNewName && isNewNumber){
          replaceOldNumber = window.confirm(`${newName} is already added to phonebook, replace old number with the new one?`)
        } else if (isNewName && !isNewNumber){
          replaceOldName = window.confirm(`${newNumber} is already added to phonebook, replace old name with the new one?`)
        } else if (!isNewName && !isNewNumber){
          alert(`${newNumber} and ${newName} is already added to phonebook`)
          return
        } else if (newName === '' && newNumber ===''){
          alert(`One or both entry is empty`)
          return
        }

        if ((isNewName && isNewNumber)){
          serverService
          .create(newObject)
          .then(response => {
            console.log('post success', response)
            const response_ = {...response, show: newName.toLowerCase().includes(search.toLowerCase())}
            setPersons(persons.concat(response_))
            setNewName('')
            setNewNumber('')
            setHeaderMessage([`Added ${newName}`, 'added'])
          })
        } else if (replaceOldName){
          serverService
          .update(sameNumber.id, newObject)
          .then(response => {
            console.log('post success', response)
            const response_ = {...response, show: newName.toLowerCase().includes(search.toLowerCase())}
            const persons_ = persons.map(item => item.number === response_.number ? response_ : item);
            setPersons(persons_)
            setNewName('')
            setNewNumber('')
            setHeaderMessage([`Changed name to ${newName}`, 'changed'])
          }).catch(() => {
            setHeaderMessage([`Information for ${newName} has aready been removed from the server`, 'error'])
          })
        } else if (replaceOldNumber){
          serverService
          .update(sameName.id, newObject)
          .then(response => {
            console.log('post success', response)
            const response_ = {...response, show: newName.toLowerCase().includes(search.toLowerCase())}
            const persons_ = persons.map(item => item.name === response_.name ? response_ : item);
            setPersons(persons_)
            setNewName('')
            setNewNumber('')
            setHeaderMessage([`Changed number to ${newNumber}`, 'changed'])
          })
          .catch(() => {
            setHeaderMessage([`Information for ${newName} has aready been removed from the server`, 'error'])
          })
        }
        setTimeout(() => {
          setHeaderMessage(['',''])
        }, 5000)
      }
    
      const handleNewNameChange = (event) => {
        console.log(event.target.value)
        console.log(event.target.value)
        setNewName(event.target.value)
      }
    
      const handleNewNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
      }
    
    return (
        <div>
            <h2>add</h2>
                <form onSubmit={add}>
                    <div>
                    name: <input value={newName} onChange={handleNewNameChange}/>
                    </div>
                    <div>
                    number: <input value={newNumber} onChange={handleNewNumberChange} />
                    </div>
                    <div>
                    <button type="submit">add</button>
                    </div>
                </form>
        </div>
    )
}

export default AddNumber