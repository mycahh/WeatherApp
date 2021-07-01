import React from 'react'
import { getSvgUrl } from '../../../helpers/images'


const AsideButtons = ({handleToggle, getInfoWeather}) => (
    <div className="sidebarInfo__buttons_wrapper">
            <button
                className="sidebarInfo__button_search"
                onClick={handleToggle}
            >
                Search for places
            </button>
            <span
                className="circle sidebarInfo__location_button"
                onClick={getInfoWeather}
            >
                <img src={getSvgUrl('location')} alt="location"/>
            </span>
    </div>
)

export default AsideButtons