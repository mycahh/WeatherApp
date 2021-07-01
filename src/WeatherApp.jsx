import React from 'react'
import useLocator from './hooks/useLocator'

import Sidebar from './components/sidebar'
import DetailsWheater from './components/main'
import LoadingScreen from './components/loading'

function WeatherApp() {
  const { WeatherInfo, isGeolocator, loading, getInfoWeather, SearchFunc } = useLocator()

  if(loading) return <LoadingScreen />

  return(
    <div className="AppGrid">
      <Sidebar
        SearchFunc={SearchFunc}
        infoWeather={WeatherInfo}
        getInfoWeather={getInfoWeather}
      />
      <DetailsWheater
        infoWeather={WeatherInfo}
      />
    </div>
  )
}

export default WeatherApp
