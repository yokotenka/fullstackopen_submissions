import serverService from '../services/server'

const DisplayNumbers = ({persons, setPersons, setHeaderMessage}) => {
    
    const deleteNumber = item => {
        const itemID = item.id
        serverService
            .deleteObject(itemID)
            .then(response => {
                console.log(response)
                setPersons(persons.filter(item => item.id !== response.id))
                setHeaderMessage([`Deleted ${response.name} from the server`, 'deleted'])
                setTimeout(() => {
                    setHeaderMessage(['',''])
                  }, 5000)
            })
            .catch(()=>{
                setHeaderMessage([`Information of ${item.name} has already been removed from the server`, 'error'])
            })
    }  
    
    return(
        <div>
            <h2>Numbers</h2>
            {persons
                .filter(item => item.show)
                .map(item => <div key={item.id}>{item.name} {item.number} <button onClick={() => deleteNumber(item)}>delete</button></div>)}
        </div>
    )
}

export default DisplayNumbers