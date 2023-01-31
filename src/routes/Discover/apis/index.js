import axios from "axios"
import config from "../../../config"
import helpers from "./helpers"
import hooks from "./hooks"
import browse from "./browse"

const getToken = async () => {
    const res = await axios.post(config.api.authUrl,
        'grant_type=client_credentials'
        , {
            ...helpers,
        })
    document.cookie = `${res?.data?.token_type}=${res?.data?.access_token}`
}


const fetch = async (endpoint) => {
    const fetchPromise = axios.get(endpoint)
    return fetchPromise
}

const apis = {
    getToken,
    fetch,
    browse,
    hooks,
}

export default apis