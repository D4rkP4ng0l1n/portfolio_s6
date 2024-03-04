import React from 'react';
import { NavLink } from 'react-router-dom';
import BongoCat from './BongoCat';

const Navbar = () => {
    return (
        <>
            <nav>
                <div>
                    <BongoCat />
                </div>
                <div>
                    <ul id='navbar'>
                        <li>
                            <NavLink to="/">
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/informations">
                                Mes informations
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/competences">
                                Mes compétences
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projets">
                                Mes projets
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;