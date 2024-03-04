import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import R301_ProjetQuidditch from '../components/R301_ProjetQuidditch';
import R401_ProjetAPIGestionBlog from '../components/R401_ProjetAPIGestionBlog';

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
                    <R401_ProjetAPIGestionBlog />
                    <R301_ProjetQuidditch />
                </div>
            </body>
        </>
    );
};

export default Administrer;