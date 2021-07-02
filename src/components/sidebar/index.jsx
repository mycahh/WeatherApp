import React, { useState, Suspense } from 'react'
import LoadingScreen from '../loading';
import SidebarInfo from './aside'
const SidebarSearch = React.lazy(() => import('./search'));


const Sidebar = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => setToggle(toggle => !toggle)

    return(
        <aside className="sidebar__wrapper">
            {
                toggle ? (
                    <Suspense fallback={<LoadingScreen />}>
                        <SidebarSearch
                            handleToggle={handleToggle}
                        />
                    </Suspense>
                )
                : (<SidebarInfo handleToggle={handleToggle}/>)
            }
        </aside>
    )
}

export default Sidebar