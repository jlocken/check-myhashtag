import axios from 'axios'
import qs from 'query-string'



export const searchTweets = async (params) => {
    const options = {
        url: `/api/search/tweets?${qs.stringify(params)}`,
        method: 'GET',
    }
    return axios(options)
}