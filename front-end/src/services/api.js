import axios from "axios";

const storeData = localStorage.getItem('authToken');

export const api = axios.create({
    baseURL:'http://localhost:3001', 
    headers: {
        Authorization: "Bearer "+storeData
    }
});