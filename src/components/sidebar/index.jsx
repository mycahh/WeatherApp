import React, { useState, Suspense } from 'react'
import SidebarInfo from './aside'
const SidebarSearch = React.lazy(() => import('./search'));

const Sidebar = ({infoWeather, getInfoWeather, SearchFunc}) => {

    const [toggle, setToggle] = useState(true)

    const handleToggle = () => setToggle(toggle => !toggle)

    return(
        <aside className="sidebar__wrapper">
            <SidebarInfo
                toggle={toggle}
                handleToggle={handleToggle}
                infoWeather={infoWeather}
                getInfoWeather={getInfoWeather}
            />

            {
                toggle && (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <SidebarSearch
                            toggle={toggle}
                            handleToggle={handleToggle}
                            SearchFunc={SearchFunc}
                        />
                    </Suspense>
                )
            }
        </aside>
    )
}

export default Sidebar