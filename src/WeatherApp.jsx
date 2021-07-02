import React from 'react'
import useLocator from './hooks/useLocator'

import Sidebar from './components/sidebar'
import DetailsWeather from './components/main'
import LoadingScreen from './components/loading'

import WeatherContext from './context/WeatherContext'


function WeatherApp() {

  const context = useLocator()
  const { loading, WeatherInfo } = context

  if(loading) return <LoadingScreen />

  return(
    <WeatherContext.Provider value={context}>
      <div className="AppGrid">
        <Sidebar />
        <DetailsWeather
          infoWeather={WeatherInfo}
        />
      </div>
    </WeatherContext.Provider>
  )
}

export default WeatherApp
