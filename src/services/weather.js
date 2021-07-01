import axios from "axios"
import { formatter } from '../helpers/formatter'


const baseURL = 'https://meta-weather.now.sh/api/location'

export const getWeatherByWoeid = async (woeid = 4118) =>  {
    const response = await axios.get(`${baseURL}/${woeid}/`)

    return formatter(response.data)
}

export const getWoeidByLattlong = async lattlong => {

    if(lattlong) {
        const response = await axios.get(`${baseURL}/search/?lattlong=${lattlong}`)

        const { woeid } = response.data[0]

        return woeid
    }
}

export const getWoeidByQuery= async(query) => {

    const response = await axios.get(`${baseURL}/search/?query=${query}`)

    const { data } = response

    const filter = data.filter(data => data.title === query)

    return filter.length !== 0 ? (filter[0].woeid) : false
}