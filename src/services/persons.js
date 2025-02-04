import axios from "axios";
const baseUrl = 'https://agenda-api-ashy.vercel.app/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then( response => {
        return response.data
    })
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then( response => {
        return response.data
    })
}

const update = ( id, newObject ) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then( response => {
        return response.data
    })
}

const destroy = ( id ) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then( response => {
        return response.data
    })
}

export default { getAll, create, update, destroy }