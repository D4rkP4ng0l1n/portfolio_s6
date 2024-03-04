import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import R5A12_AlgoGen from '../components/R5A12_AlgoGen';
import SAE_S3_EasySport from '../components/SAE_S3_EasySport';

const Optimiser = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
                <h1 className='title'> Compétence Optimiser </h1>
                <NavLink className='navButton' to='/competences'>
                    Revenir à la page des compétences
                </NavLink>
                <div className='projectsDetailContainer'>
                    <R5A12_AlgoGen />
                    <SAE_S3_EasySport />
                </div>
            </body>
        </>
    );
};

export default Optimiser;