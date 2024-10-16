import { useState } from "react"



const SearchNumber = ({persons, setPersons, search, setSearch}) => {
    

    const handleNewSearch = (event) => {
        const val = event.target.value
        console.log(val)
        setSearch(val)
        setPersons(persons.map(item => (({...item, show: item.name.toLowerCase().includes(val.toLowerCase())}))))
    }

    return (
        <div>
            <h2>Phonebook</h2>
                <form>
                    <div>
                    filter shown with<input value={search} onChange={handleNewSearch} />
                    </div>
                </form>
        </div>
    )

}

export default SearchNumber