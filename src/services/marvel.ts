import axios, { AxiosInstance } from 'axios';

    const marvelService = axios.create({
        baseURL: process.env.REACT_APP_MARVEL_BASE_URL
    })

    marvelService.defaults.params = {
        apikey: process.env.REACT_APP_MARVEL_PUBLIC_API_KEY
    }

export default marvelService;