import { useEffect, useState } from 'react'
import { getCurrentPosition } from '../helpers/geolocation'
import { getWoeidByLattlong, getWeatherByWoeid } from '../services/weather'

const useLocator = () => {

    const initialState = {ok: true, msg: ''}

    const [error, setError] = useState(initialState)
    const [WeatherInfo, setWeatherInfo] = useState({})
    const [loading, setLoading] = useState(true)

    const getInfoWeather = () => {
        getCurrentPosition()
          .then(({coordenate, isGeolocator}) => {
            if(!isGeolocator) {
              setError({ok: false, msg: 'The locator was not detected. Please enable if you want to use the locator.'})
            } else {
              setError(initialState)
            }
            return coordenate
          })
          .then(getWoeidByLattlong)
          .then(getWeatherByWoeid)
          .then(info => {
            setWeatherInfo(info)
            setLoading(false)
          })
          .catch(() => setError({ok: false, msg: 'The device does not have internet access.'}))
    }

    const SearchFunc = {setWeatherInfo, setLoading}

    useEffect(() => {
        getInfoWeather()
    }, [])

    return {error, WeatherInfo, loading, getInfoWeather, SearchFunc}
}

export default useLocator