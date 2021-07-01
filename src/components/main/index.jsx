import React from 'react'
import ListForecast from './forecast/ListForecast'
import WheaterStatus from './Status/WheaterStatus'


const DetailsWheater = ({infoWeather}) => {

    const { Forecast, WeatherStatusInfo } = infoWeather

    return(
        <main className="detailsWheater__wrapper">
            <ListForecast
                Forecast={Forecast}
            />
            <WheaterStatus
                WeatherStatusInfo={WeatherStatusInfo}
            />
            <footer>Created by
                <a href="https://github.com/mycahh/" rel="noreferrer" target="_blank"> Mycahh </a>
                 - devChallenges.io
            </footer>
        </main>
    )
}

export default DetailsWheater