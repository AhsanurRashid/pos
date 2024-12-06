import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!baseURL) {
    throw new Error('NEXT_PUBLIC_API_BASE_URL is not defined in .env.local');
}

const axiosInstance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosInstance