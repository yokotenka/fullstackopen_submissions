import serverService from '../services/server'

const DisplayNumbers = ({persons, setPersons}) => {
    
    const deleteNumber = itemID => {
        serverService
            .deleteObject(itemID)
            .then(response => {
                console.log(response)
                setPersons(persons.filter(item => item.id !== response.id))
            })
    }  
    
    return(
        <div>
            <h2>Numbers</h2>
            {persons
                .filter(item => item.show)
                .map(item => <div key={item.id}>{item.name} {item.number} <button onClick={() => deleteNumber(item.id)}>delete</button></div>)}
        </div>
    )
}

export default DisplayNumbers