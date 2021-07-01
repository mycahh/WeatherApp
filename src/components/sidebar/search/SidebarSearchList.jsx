import React from 'react'
import SidebarSearchListItem from './SidebarSearchListItem'

const SidebarSearchList = ({SearchByQuery}) => {

    const locations = ['London', 'Barcelona', 'Long Beach']
    return (
        <div className="SidebarSearch__list">
            {
                locations.map(location => (
                    <SidebarSearchListItem
                        location={location}
                        SearchByQuery={SearchByQuery}
                        key={location}
                    />
                ))
            }
        </div>
    )
}

export default SidebarSearchList