import React from 'react'
import AsideButtons from './SidebarInfoButtons'
import AsideInfo from './SidebarInfoWeather'

const SidebarComponent = ({handleToggle}) => (
    <div className="sidebarInfo__wrapper" >
        <AsideButtons
            handleToggle={handleToggle}
        />
        <AsideInfo />
    </div>
)

export default SidebarComponent