import React from 'react'
import AsideButtons from './SidebarInfoButtons'
import AsideInfo from './SidebarInfoWeather'

const SidebarComponent = ({toggle, handleToggle, infoWeather, getInfoWeather}) => (
    <div className={`sidebarInfo__wrapper ${toggle  ? 'none' : ''}`} >
        <AsideButtons
            handleToggle={handleToggle}
            getInfoWeather={getInfoWeather}
        />
        <AsideInfo
            infoWeather={infoWeather}
        />
    </div>
)

export default SidebarComponent