import axios from "axios"
const ACCESS_TOKEN = 'YOUR_API_KEY'

export const getSongList = async () => {
    const song = await axios.get(`https://api.genius.com/search?q=""&sort=popularity&access_token=${ACCESS_TOKEN}`)
    return song.data.response.hits
}

export const getSongListbyQuery = async (q) => {
    const song = await axios.get(`https://api.genius.com/search?q=${q}&access_token=${ACCESS_TOKEN}`)
    return song.data.response.hits
}
