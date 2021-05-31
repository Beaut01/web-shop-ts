import React from 'react'
import { NavLink } from 'react-router-dom'

export const SideNav: React.FC = () => {
    return(
        <div className='wrapper' >
            <ul>
                <li >
                    <NavLink to='/cpus' className='wrapper--link'>
                        <p>Процессоры</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink to='/telephones' className='wrapper--link'>
                        <p>Телефоны</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink to='/cpus' className='wrapper--link'>
                        <p>Миксеры</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink to='/cpus' className='wrapper--link'>
                        <p>Мультиварки</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink to='/cpus' className='wrapper--link'>
                        <p>Планшеты</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink to='/cpus' className='wrapper--link'>
                        <p>Наушники</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink to='/cpus' className='wrapper--link'>
                        <p>Колонки</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink to='/cpus' className='wrapper--link'>
                        <p>Клавиатуры</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink to='/cpus' className='wrapper--link'>
                        <p>Фототехника</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink to='/cpus' className='wrapper--link'>
                        <p>Стиральные машины</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}