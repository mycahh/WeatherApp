import React from 'react'
import { getImageUrl } from '../../../helpers/images'


const ItemForecast = ({date, weather, min_temp, max_temp, isCelsius}) => (
    <article className="forecastSingle">
        <p className="forecastSingle_date">{date}</p>
        <img
            src={`${getImageUrl(weather)}`}
            className="forecastSingle_img" alt={weather} />
        <div className="forecastSingle_temperatures">
            <p className={`${isCelsius ? 'isCelsius' : 'isFahrenheit' }`}>
                {isCelsius ? min_temp : Math.floor(min_temp * 1.8) + 32}
            </p>
            <p className={`forecastSingle_max ${isCelsius ? 'isCelsius' : 'isFahrenheit' }`}>
                {isCelsius ? max_temp : Math.floor(max_temp * 1.8) + 32}
            </p>
        </div>
    </article>
)

export default ItemForecast