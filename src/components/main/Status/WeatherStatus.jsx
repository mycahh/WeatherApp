import React from 'react'
import WeatherItem from './WeatherItem'
import { getSvgUrl } from '../../../helpers/images'
import BarHumedity from './BarHumedity'

const WeatherStatus = ({WeatherStatusInfo}) => {

    const { windSpeed, windDirection, humidity, visibility, airPressure } = WeatherStatusInfo

    return(
       <div className="weatherStatus__wrapper">
            <h2 className="weatherStatus__title">Today’s Hightlights</h2>
            <div className="weatherStatus__list">
                <WeatherItem title="Wind Status" position="1" info={windSpeed}>
                    <div className="weatherStatus_windWrapper">
                        <span className="circle windCircle">
                            <img src={`${getSvgUrl('navigation')}`} className={`${windDirection}`} />
                        </span>
                        <span>{windDirection}</span>
                    </div>
                </WeatherItem>
                <WeatherItem title="Humidity" position="2" info={humidity}>
                    <BarHumedity humidity={humidity} />
                </WeatherItem>

                <WeatherItem title="Visibility" position="3" info={visibility} />
                <WeatherItem title="Air Pressure" position="4" info={airPressure} />
            </div>
       </div>
    )}

export default WeatherStatus