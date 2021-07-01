import React, { useState, Suspense } from 'react'
import LoadingScreen from '../loading';
import SidebarInfo from './aside'
const SidebarSearch = React.lazy(() => import('./search'));


const Sidebar = ({infoWeather, getInfoWeather, SearchFunc, error}) => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => setToggle(toggle => !toggle)

    return(
        <aside className="sidebar__wrapper">
            <SidebarInfo
                toggle={toggle}
                handleToggle={handleToggle}
                infoWeather={infoWeather}
                getInfoWeather={getInfoWeather}
                error={error}
            />

            {
                toggle && (
                    <Suspense fallback={<LoadingScreen />}>
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