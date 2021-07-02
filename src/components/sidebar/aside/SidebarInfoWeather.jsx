import React, { useContext } from 'react'
import { getImageUrl, getSvgUrl } from '../../../helpers/images'
import WeatherContext from '../../../context/WeatherContext'

const AsideInfo = () => {

    const { WeatherInfo } = useContext(WeatherContext)
    const { CurrentWeather, Location, Temperature, TodayFormat } = WeatherInfo

    return(
        <>
            <div className="sidebarInfo__background_wrapper">
                <img
                    src={getImageUrl('Cloud-background')}
                    className="sidebarInfo__background_image" alt="background_clouds" />
                <img
                   src={getImageUrl(CurrentWeather)}
                    className="sidebarInfo__current_weather_img" alt="Current Weather"
                 />
            </div>
            <div className="sidebarInfo__InfoWeather_wrapper">
                <p className="sidebarInfo__temperature">{Temperature}</p>
                <h2 className="sidebaInfo__weather">{CurrentWeather}</h2>
                <p className="sidebarInfo__date">Today  •  {TodayFormat}</p>
                <div className="sidebarInfo__location">
                        <img src={getSvgUrl('gps')} alt="location" />
                        <span>{Location}</span>
                </div>
            </div>
        </>
    )
}

export default AsideInfo