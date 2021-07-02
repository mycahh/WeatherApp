import { useEffect, useState } from 'react'
import { getCurrentPosition } from '../helpers/geolocation'
import { getWoeidByLattlong, getWeatherByWoeid } from '../services/weather'

const useLocator = () => {

    const initialState = {ok: true, msg: ''}

    const [error, setError] = useState(initialState)
    const [WeatherInfo, setWeatherInfo] = useState({})
    const [loading, setLoading] = useState(true)
    const [init, setInit] = useState(true)

    const getPosition = geolocationObject => {
      const { coords: {latitude, longitude}} = geolocationObject
      return `${latitude},${longitude}`
    }

    const setInfoState = info => {
      setWeatherInfo(info)
      setError(initialState)
    }

    const finallyEvents = () => {
      setInit(false)
      setLoading(false)
    }

    const errorHandling = async err => {
      if(init) {
        const DefaultLocation = await getWeatherByWoeid()
        setWeatherInfo(DefaultLocation)
      } else {
        console.log(err)
        if(err.code === 1) setError({ok: false, msg: 'The locator was not detected. Please enable if you want to use the locator and try again.'})
        if(err.code === 2) setError({ok: false, msg: 'The device does not have internet access.'})
        setTimeout(() => {setError(initialState)}, 4000)
      }
    }


    function getInfoWeather() {
      getCurrentPosition()
      .then(getPosition)
      .then(getWoeidByLattlong)
      .then(getWeatherByWoeid)
      .then(setInfoState)
      .catch(errorHandling)
      .finally(finallyEvents)
    }

    useEffect(() => {
      getInfoWeather()
    }, [])

    return { WeatherInfo, loading, error, setWeatherInfo, getInfoWeather}
}

export default useLocator
