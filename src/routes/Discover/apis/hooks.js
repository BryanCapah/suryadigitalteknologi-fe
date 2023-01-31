import axios from "axios"
import { useEffect } from "react"
import apis from "."
import config from "../../../config"
import helpers from "./helpers"

const useApiConfig = () => {
    const token = helpers.getTokenFromCookie()
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        axios.defaults.baseURL = config.api.baseUrl

    }
    else {
        axios.defaults.headers.common['Authorization'] = 'Basic '
            + (new Buffer(process.env.REACT_APP_SPOTIFY_CLIENT_ID
                + ':'
                + process.env.REACT_APP_SPOTIFY_CLIENT_SECRET).toString('base64'))
        axios.defaults.baseURL = config.api.authUrl
    }
    axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
    axios.defaults.headers.common['Accept'] = 'application/json'
    axios.defaults.withCredentials = false

    useEffect(_ => {
        const fetch = async () => {
            apis.getToken()
        }
        fetch()
    }, [])
}

const hooks = {
    useApiConfig
}

export default hooks