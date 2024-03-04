import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SAE_S5_WekinGames from '../components/SAE_S5_WekinGames';
import Stage_EcoCab from '../components/Stage_EcoCab';

const Conduire = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
                <h1 className='title'> Compétence Conduire </h1>
                <NavLink className='navButton' to='/competences'>
                    Revenir à la page des compétences
                </NavLink>
                <div className='projectsDetailContainer'>
                    <Stage_EcoCab />
                    <SAE_S5_WekinGames />
                </div>
            </body>
        </>
    );
};

export default Conduire;