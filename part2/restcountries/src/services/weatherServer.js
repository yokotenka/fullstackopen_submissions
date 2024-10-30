import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/'
const iconUrl = 'https://openweathermap.org/img/wn/'
const apiKey = import.meta.env.VITE_SOME_KEY

const getCoordWeather = (city) => {

    const url = `${baseUrl}weather?q=${city}&appid=${apiKey}&units=metric`
    console.log(url)
    return processRequest('get', url);
};

const processRequest = (method, url, data = null) => {
    const request = axios({ method, url, data });
    return request.then(response => response.data);
};

const getIconURL = (iconCode) => {
    return(`${iconUrl}${iconCode}@2x.png`)
}

export default {getCoordWeather, getIconURL}