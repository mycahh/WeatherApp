import React from 'react'
import ListForecast from './forecast/ListForecast'
import WeatherStatus from './Status/WeatherStatus'


const DetailsWeather = ({infoWeather}) => {

    const { Forecast, WeatherStatusInfo } = infoWeather

    return(
        <main className="detailsWeather__wrapper">
            <ListForecast
                Forecast={Forecast}
            />
            <WeatherStatus
                WeatherStatusInfo={WeatherStatusInfo}
            />
            <footer>Created by
                <a href="https://github.com/mycahh/" rel="noreferrer" target="_blank"> Mycahh </a>
                 - devChallenges.io
            </footer>
        </main>
    )
}

export default DetailsWeather