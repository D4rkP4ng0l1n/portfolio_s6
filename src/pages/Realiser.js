import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import R301_ProjetQuidditch from '../components/R301_ProjetQuidditch';
import R5A04_ProjetLabyrinthe from '../components/R5A04_ProjetLabyrinthe';

const Realiser = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
                <h1 className='title'> Compétence Réaliser </h1>
                <NavLink className='navButton' to='/competences'>
                    Revenir à la page des compétences
                </NavLink>
                <div className='projectsDetailContainer'>
                    <R5A04_ProjetLabyrinthe />
                    <R301_ProjetQuidditch />
                </div>
            </body>
        </>
    );
};

export default Realiser;