import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBlenderPhone, faMicrochip, faTabletAlt, faHeadphonesAlt, faKeyboard, faCamera, faWater, faMusic, faBreadSlice } from '@fortawesome/free-solid-svg-icons'

export const SideNav: React.FC = () => {
    return(
        <div className='wrapper' >
            <ul>
                <li >
                    <NavLink to='/cpus' className='wrapper--link'>
                        <FontAwesomeIcon icon={faMicrochip} />
                        <p>Процессоры</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink to='/telephones' className='wrapper--link'>
                        <FontAwesomeIcon icon={faPhone} />
                        <p>Телефоны</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink to='/cpus' className='wrapper--link'>
                        <FontAwesomeIcon icon={faBlenderPhone} />
                        <p>Миксеры</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink to='/cpus' className='wrapper--link'>
                        <FontAwesomeIcon icon={faBreadSlice} />
                        <p>Товары для кухни</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink to='/cpus' className='wrapper--link'>
                        <FontAwesomeIcon icon={faTabletAlt} />
                        <p>Планшеты</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink to='/cpus' className='wrapper--link'>
                        <FontAwesomeIcon icon={faHeadphonesAlt} />
                        <p>Наушники</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink to='/cpus' className='wrapper--link'>
                        <FontAwesomeIcon icon={faMusic} />
                        <p>Колонки</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink to='/cpus' className='wrapper--link'>
                        <FontAwesomeIcon icon={faKeyboard} />
                        <p>Клавиатуры</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink to='/cpus' className='wrapper--link'>
                        <FontAwesomeIcon icon={faCamera} />
                        <p>Фототехника</p>
                    </NavLink>
                </li>
                <li >
                    <NavLink to='/cpus' className='wrapper--link'>
                        <FontAwesomeIcon icon={faWater} />
                        <p>Стиральные машины</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}