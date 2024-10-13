

const DisplayNumbers = ({persons}) => {
    return(
        <div>
            <h2>Numbers</h2>
            {persons.map(item => <div key={item.id}>{item.name} {item.number}</div>)}
        </div>
    )
}

export default DisplayNumbers