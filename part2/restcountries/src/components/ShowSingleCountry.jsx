import { useState, useEffect } from "react"
import weatherServer from "../services/weatherServer"

const ShowSingleCountry = ({country}) => {
    const [weather, setWeather] = useState({})


    useEffect(() => {
        console.log(country.capital[0])
        weatherServer
        .getCoordWeather(country.capital[0])
        .then(response => {
            console.log(response)
            setWeather({
                temperature: response.main.temp,
                icon: response.weather[0].icon,
                wind: response.wind.speed
            })
        })
    }, [])

    return(
        <div>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <h3>languages</h3>
            <ul>
                {country.languages ? (
                    Object.entries(country.languages).map(([code, language]) => (
                        <li key={code}>
                            {language}
                        </li>
                    ))
                ) : (
                    <p>No languages available</p>
                )}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
            <h3>Weather in {country.capital}</h3>
            <div>temperature {weather.temperature} Celcius</div>
            <img src={weatherServer.getIconURL(weather.icon)} />
            <div>wind {weather.wind} m/s</div>
        </div>
    )
}

export default ShowSingleCountry