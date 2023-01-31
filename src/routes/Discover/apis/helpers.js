const getTokenFromCookie = () => {
    try {
        const cookieValue = document.cookie
            ?.split('; ')
            ?.find(row => row?.startsWith('Bearer'))
            ?.split('=')[1];
        return cookieValue
    } catch (error) {
        return false
    }
}

const headers = {
    'Authorization': 'Basic '
        + (new Buffer(process.env.REACT_APP_SPOTIFY_CLIENT_ID
            + ':'
            + process.env.REACT_APP_SPOTIFY_CLIENT_SECRET).toString('base64')),
    'Content-Type': 'application/x-www-form-urlencoded',
}

const helpers = {
    getTokenFromCookie,
    headers
}

export default helpers