import React from 'react'
import { NavLink } from 'react-router-dom'

export const SideNav: React.FC = () => {
    return(
        <div className='wrapper d-flex' >
            <ul>
                <NavLink to='/cpus' style={{color: 'black', fontSize: '12px'}}>
                    <p>Процессоры</p>
                </NavLink>
                <NavLink to='/telephones'>
                    <p>Телефоны</p>
                </NavLink>
            </ul>
        </div>
    )
}