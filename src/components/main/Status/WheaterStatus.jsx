import React from 'react'
import WheaterItem from './WheaterItem'
import { getSvgUrl } from '../../../helpers/images'
import BarHumedity from './BarHumedity'

const WheaterStatus = ({WeatherStatusInfo}) => {

    const { windSpeed, windDirection, humidity, visibility, airPressure } = WeatherStatusInfo

    return(
       <div className="wheaterStatus__wrapper">
            <h2 className="wheaterStatus__title">Today’s Hightlights</h2>
            <div className="wheaterStatus__list">
                <WheaterItem title="Wind Status" position="1" info={windSpeed}>
                    <div className="wheaterStatus_windWrapper">
                        <span className="circle windCircle">
                            <img src={`${getSvgUrl('navigation')}`} className={`${windDirection}`} />
                        </span>
                        <span>{windDirection}</span>
                    </div>
                </WheaterItem>
                <WheaterItem title="Humidity" position="2" info={humidity}>
                    <BarHumedity humidity={humidity} />
                </WheaterItem>

                <WheaterItem title="Visibility" position="3" info={visibility} />
                <WheaterItem title="Air Pressure" position="4" info={airPressure} />
            </div>
       </div>
    )}

export default WheaterStatus