import { useEffect, useState } from 'react'
import { getCurrentPosition } from '../helpers/geolocation'
import { getWoeidByLattlong, getWeatherByWoeid } from '../services/weather'

const useLocator = () => {

    const [isGeolocator, setGeolocator] = useState(false)
    const [WeatherInfo, setWeatherInfo] = useState({})
    const [loading, setLoading] = useState(true)

    const getInfoWeather = () => {
        getCurrentPosition()
          .then(({coordenate, isGeolocator}) => {
            setGeolocator(isGeolocator)
            return coordenate
          })
          .then(getWoeidByLattlong)
          .then(getWeatherByWoeid)
          .then(info => {
            setWeatherInfo(info)
            setLoading(false)
            console.log(info)
          })
    }

    const SearchFunc = {setWeatherInfo, setLoading}

    useEffect(() => {
        getInfoWeather()
    }, [])

    return {isGeolocator, WeatherInfo, loading, getInfoWeather, SearchFunc}
}

export default useLocator