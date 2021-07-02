import React, { useState, useContext } from 'react'
import SidebarSearchClose from './SidebarSearchClose'
import SidebarSearchInput from './SidebarSearchInput'
import SidebarSearchList from './SidebarSearchList'

import { getWoeidByQuery, getWeatherByWoeid } from '../../../services/weather'

import WeatherContext from '../../../context/WeatherContext'

const SidebarSearch = ({handleToggle}) => {

    const initialStateError = {ok: true, msg:''}
    const  { setWeatherInfo }  = useContext(WeatherContext)
    const [error, setError] = useState(initialStateError)

    const SearchByQuery = query => {
        getWoeidByQuery(query)
        .then(res => {
            if(!res) { setError({ ok: false, msg: 'No locality found.'}); return res}
            setError(initialStateError)
            return getWeatherByWoeid(res)
        })
        .then(res => { if(res) setWeatherInfo(res)})
        .catch(() => setError({ok: false, msg: 'The device does not have internet access'}))
    }

    return(
        <div className="SidebarSearch__wrapper">
            <SidebarSearchClose
                handleToggle={handleToggle}
            />
            <SidebarSearchInput
                SearchByQuery={SearchByQuery}
                setError={setError}
                error={error}
            />
            <SidebarSearchList
                SearchByQuery={SearchByQuery}
            />
        </div>
    )
}

export default SidebarSearch