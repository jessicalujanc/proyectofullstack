import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


const Nav = (props) => {
    return (
        <nav>
            <div className='App-container'>
                <ul>
                    <li><NavLink className={({ isActive}) => isActive ? "activo" : undefined} to="/src/pages/HomePage">Home</NavLink></li>
                    <li><NavLink className={({ isActive}) => isActive ? "activo" : undefined} to="/src/pages/NosotrosPage">Nosotros</NavLink></li>
                    <li><NavLink className={({ isActive}) => isActive ? "activo" : undefined} to="/src/pages/ComunidadPage">Comunidad</NavLink></li>
                    <li><NavLink className={({ isActive}) => isActive ? "activo" : undefined} to="/src/pages/ContactoPage">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;