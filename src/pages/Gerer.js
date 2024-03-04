import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import R301_ProjetQuidditch from '../components/R301_ProjetQuidditch';
import R4A10_MessagerieDuSUD from '../components/R4A10_MessagerieDuSUD';

const Gerer = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
                <h1 className='title'> Compétence Gérer </h1>
                <NavLink className='navButton' to='/competences'>
                    Revenir à la page des compétences
                </NavLink>
                <div className='projectsDetailContainer'>
                    <R4A10_MessagerieDuSUD />
                    <R301_ProjetQuidditch />
                </div>
            </body>
        </>
    );
};

export default Gerer;