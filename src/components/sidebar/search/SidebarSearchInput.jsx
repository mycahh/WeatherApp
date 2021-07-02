import React, { useState } from 'react'
import { getSvgUrl } from '../../../helpers/images'

const SidebarSearchInput = ({SearchByQuery, setError, error}) => {
    const [search, setSearch] = useState('')

    const handleSubmit = event => {
        event.preventDefault()

        if(search === '') {
            setError({ok: false, msg:'Cannot place an empty input'})
            return;
        }

        SearchByQuery(search)
    }

    const handleChange = e => setSearch(e.target.value)

    return(
       <>
        <form className="SidebarSearch__form" onSubmit={handleSubmit}>
            <div className={`SidebarSearch__input_wrapper ${!error.ok ? 'error': ''}`}>
                <img src={`${getSvgUrl('search')}`} alt="Search Icon"/>
                <input
                    className="SidebarSearch__inputSearch"
                    placeholder="Search location"
                    value={search}
                    onChange={handleChange}
                />
            </div>
            <input
                type="submit"
                className="SidebarSearch__inputSubmit"
                value="Search"
            />
        </form>
       { !error.ok && <p className="error_input">{error.msg}</p>}
       </>
    )
}

export default SidebarSearchInput