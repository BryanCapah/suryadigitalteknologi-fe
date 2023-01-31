import { useEffect, useState } from "react";
import apis from "./apis";

const useDiscover = () => {
    const [discover, setDiscover] = useState({
        newReleases: [],
        playlists: [],
        categories: []
    })

    useEffect(_ => {
        const fetch = async () => {
            const newReleasePromise = apis.browse.getNewRelease()
            const playlistsPromise = apis.browse.getfeaturedPlaylists()
            const categoriesPromise = apis.browse.getcategories()

            const newRelease = await newReleasePromise
            const playlists = await playlistsPromise
            const categories = await categoriesPromise

            setDiscover(current => ({
                ...current,
                newReleases: newRelease?.data?.albums?.items,
                playlists: playlists?.data?.playlists?.items,
                categories: categories?.data?.categories?.items,
            }))
        }
        fetch()

    }, [])

    return {
        ...discover
    }
}

const discover = {
    useDiscover
}

export default discover