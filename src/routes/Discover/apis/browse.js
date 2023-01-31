import apis from ".";
import config from "../../../config"

const getNewRelease = async () => {
    const newReleasePromise = apis.fetch(config.endPoints.newRelease)
    return newReleasePromise
}

const getfeaturedPlaylists = async () => {
    const featuredPlaylistsPromise = apis.fetch(config.endPoints.featuredPlaylist)
    return featuredPlaylistsPromise
}

const getcategories = async () => {
    const categoriesPromise = apis.fetch(config.endPoints.categories)
    return categoriesPromise
}

const browse = {
    getNewRelease,
    getfeaturedPlaylists,
    getcategories
}

export default browse