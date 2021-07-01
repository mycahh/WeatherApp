import React from 'react'

const WeatherItem = ({children, title, position, info}) => (
    <article className={`weatherStatus__Item w-${position}`}>
        <p className="weatherStatus__Item_title">{title}</p>
        <h3 className={`weatherStatus__Item_info c-${position}`}>{info}</h3>
        {children}
    </article>
)

export default WeatherItem
