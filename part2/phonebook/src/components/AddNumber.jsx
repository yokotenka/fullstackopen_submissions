/**
 * Summary. 
 * AddNumber component is responsible for the form used to add new numbers to the 
 * persons array. 
 */


const AddNumber = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber})=> {
    
    const add = (event) => {
        // important step
        event.preventDefault()
        const noteObject = {
          name: newName,
          number: newNumber,
          id: newNumber
        }
        // const isNewName = persons.reduce((acc, item) => (item.name !== newName) && acc, true)
        const isNewNumber = persons.reduce((acc, item) => (item.number !== newNumber) && acc, true)
    
        if (newName === '' || newNumber===''){
          alert(`one of the texts is empty`)
        }
        else if (isNewNumber){
          setPersons(persons.concat(noteObject))
        }else{
          alert(`${newNumber} is already added to phonebook`)
        }   
        setNewName('')
        setNewNumber('')
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