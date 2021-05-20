import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid d-flex">
                <NavLink className="navbar-brand" to="/">Shop</NavLink>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link active" aria-current="page" to="/">Главная</NavLink>
                        <NavLink className="nav-link" to="/information">Информация</NavLink>
                    </div>
                </div>
                <NavLink to='/basket' >
                    <button className='btn btn-light'>Корзина</button>
                </NavLink>
            </div>
        </nav>
    )
}