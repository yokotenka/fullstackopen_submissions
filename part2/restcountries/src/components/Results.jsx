import ShowSingleCountry from "./ShowSingleCountry"

const Results = ({filtered, setFiltered}) => {
    
    const handleOnClick = item => {
        setFiltered([item])
    }

    const length = filtered.length
    if (length === 1){
        return(
           <ShowSingleCountry country={filtered[0]} />
        )
    }else if (length > 10){
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
    else if (length > 1){
        return (
        <form>
            {filtered.map(item => 
                <div key={item.cca2}>
                    {item.name.common} <button onClick={() => handleOnClick(item)}>show</button>
                </div>)}
        </form>
        )
    }
    return (
        <div>
            No matches
        </div>
    )
}

export default Results