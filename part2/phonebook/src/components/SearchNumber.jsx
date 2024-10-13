import { useState } from "react"



const SearchNumber = ({persons, setShowPersons}) => {
    const [search, setSearch] = useState('')

    const handleNewSearch = (event) => {
        const val = event.target.value
        console.log(val)
        setSearch(val)
        setShowPersons(persons.filter(item => item.name.toLowerCase().includes(val.toLowerCase())))
    }

    return (
        <div>
            <h2>add</h2>
                <form>
                    <div>
                    filter shown with<input value={search} onChange={handleNewSearch} />
                    </div>
                </form>
        </div>
    )

}

export default SearchNumber