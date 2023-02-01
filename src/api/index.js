import axios from 'axios'

export default ({ requiresAuth = false } = {}) => {

    const api = axios.create({ baseURL: "http://localhost:8080/api/v1", headers: { "Content-Type": "application/json" } })
    if (requiresAuth) {
        options.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`
    }
    return api;

}