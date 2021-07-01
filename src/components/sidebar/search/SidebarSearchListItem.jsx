import React from 'react'
import { getSvgUrl } from '../../../helpers/images'


const SidebarSearchListItem = ({location, SearchByQuery}) => (
    <article
        className="SidebarSearch__item"
        onClick={() => SearchByQuery(location)}
    >
        <p>{location}</p>
        <img src={`${getSvgUrl('keyboard')}`} alt="keyboard icon"/>
    </article>
)

export default SidebarSearchListItem