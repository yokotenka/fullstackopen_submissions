import { useState } from "react"
import Results from "./Results"

const Search = ({countries}) => {

    const [search, setSearch] = useState('')
    const [filtered, setFiltered] = useState([])

    const handleNewSearch = (event) => {
        const val = event.target.value
        console.log(val)
        setSearch(val)
        
        setFiltered(countries.filter(item => item.name.common.toLowerCase().includes(val.toLowerCase())))
    }

    return(
        <div>
            <form >
                <input value={search} onChange={handleNewSearch} />
            </form>
            <Results filtered={filtered} setFiltered={setFiltered}/>
        </div>
    )

}

export default Search