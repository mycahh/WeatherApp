import React, { useState } from 'react'
import ItemForecast from './ItemForecast'
import './helpers.css'

const ListForecast = ({Forecast}) => {

    const [isCelsius, setIsCelsius] = useState(true)

    return(
        <div className="forecast__wrapper">
            <div className="switcher__wrapper">
                <span
                    className="switcher__cel circle"
                    onClick={() => setIsCelsius(true)}
                >℃</span>
                <span
                    className="switcher__far circle"
                    onClick={() => setIsCelsius(false)}
                >℉</span>
            </div>
            <div className="forecast_grid">
                {Forecast.map(forecast => <ItemForecast {...forecast} isCelsius={isCelsius} /> )}
            </div>
        </div>
    )
}

export default ListForecast