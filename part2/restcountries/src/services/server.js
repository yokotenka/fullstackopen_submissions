import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = () => {
    return processRequest('get', baseUrl);
};



const processRequest = (method, url, data = null) => {
    const request = axios({ method, url, data });
    return request.then(response => response.data);
};



export default {getAll}