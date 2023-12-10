import axios from 'axios';

const SERVER = 'http://localhost:5050';

const headers = {
    'Content-Type': 'application/json'
}

const api = {
    get: (url) => {
        return axios.get(SERVER+url, { headers: headers });
    },
    post: (url, data) => {
        return axios.post(SERVER+url, data, { headers: headers });
    },
    put: (url, data) => {
        return axios.put(SERVER+url, data, { headers: headers });
    },
    delete: (url) => {
        return axios.delete(SERVER+url, { headers: headers });
    }
}

export default api;