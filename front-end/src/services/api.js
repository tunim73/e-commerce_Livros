import axios from "axios";

export const authHeaders = () => {

    const token = localStorage.getItem('authToken');

    if(!token)
        return null

    api.defaults.headers.Authorization = `Bearer ${token}`;
}

export const api = axios.create({
    baseURL:'http://localhost:3001', 
    headers: {
        Authorization: ""
    }
});