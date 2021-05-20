import React from 'react'
import { NavLink } from 'react-router-dom'

export const SideNav: React.FC = () => {
    return(
        <div className='wrapper'>
            <ul>
                <NavLink to='/cpus'>
                    <p>Процессоры</p>
                </NavLink>
                <NavLink to='/telephones'>
                    <p>Телефоны</p>
                </NavLink>
            </ul>
        </div>
    )
}