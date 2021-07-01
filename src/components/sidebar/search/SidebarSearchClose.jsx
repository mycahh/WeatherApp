import React from 'react'
import { getSvgUrl } from '../../../helpers/images'

const SidebarSearchClose = ({handleToggle}) => (
    <div className="SidebarSearch__close" onClick={handleToggle} >
        <img src={`${getSvgUrl('close')}`} alt="close button" />
    </div>
)

export default SidebarSearchClose