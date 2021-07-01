import React from 'react'

const WheaterItem = ({children, title, position, info}) => (
    <article className={`wheaterStatus__Item w-${position}`}>
        <p className="wheaterStatus__Item_title">{title}</p>
        <h3 className={`wheaterStatus__Item_info c-${position}`}>{info}</h3>
        {children}
    </article>
)

export default WheaterItem
