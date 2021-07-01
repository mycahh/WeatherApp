import React, { useState } from 'react'
import SidebarSearchClose from './SidebarSearchClose'
import SidebarSearchInput from './SidebarSearchInput'
import SidebarSearchList from './SidebarSearchList'

import { getWoeidByQuery, getWeatherByWoeid } from '../../../services/weather'


const SidebarSearch = ({toggle, handleToggle, SearchFunc}) => {

    const initialStateError = {ok: true, msg:''}

    const {setWeatherInfo, setLoading} = SearchFunc
    const [error, setError] = useState(initialStateError)

    const SearchByQuery = query => {
        getWoeidByQuery(query)
        .then(res => {
            if(res) {
                setError(initialStateError)
                return getWeatherByWoeid(res)
            } else {
                setError({
                    ok: false,
                    msg: 'No se encontró la localidad.'
                })
                //setTimeout(()=> setError(initialStateError), 3000)
                return false
            }
        })
        .then(res => {
            if(res) {
                setWeatherInfo(res)
            }
        })
        .catch(() => setError({ok: false, msg: 'The device does not have internet access'}))
    }

    return(
        <div className={`SidebarSearch__wrapper ${toggle ? '' : 'none' }`}>
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