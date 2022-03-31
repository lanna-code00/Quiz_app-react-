import axios from "axios"

const baseUrl = process.env.REACT_APP_MOCK_API_TEST;

const axiosInstance = axios.create({
    baseURL: baseUrl
})

export default axiosInstance; 