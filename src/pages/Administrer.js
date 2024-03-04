import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Administrer = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
                <h1 className='title'> Compétence Administrer </h1>
                <NavLink className='navButton' to='/competences'>
                    Revenir à la page des compétences
                </NavLink>
                <div className='projectsDetailContainer'>

                </div>
            </body>
        </>
    );
};

export default Administrer;