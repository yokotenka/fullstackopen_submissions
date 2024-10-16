import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return processRequest('get', baseUrl);
};

const create = (newObject) => {
    return processRequest('post', baseUrl, newObject);
};

const deleteObject = (objectId) => {
    return processRequest('delete', `${baseUrl}/${objectId}`);
};

const update = (id, newObject) => {
    return processRequest('put', `${baseUrl}/${id}`, newObject)
};

const processRequest = (method, url, data = null) => {
    const request = axios({ method, url, data });
    return request.then(response => response.data);
};



export default {getAll, create, deleteObject, update}