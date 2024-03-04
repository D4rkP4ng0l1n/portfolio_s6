import React from 'react';

import Quidditch from './../images/Quidditch.png';

const R301_ProjetQuidditch = () => {
    return (
        <div className='projectContainer'>
            <h2 className='projectTitle'> Projet Quidditch </h2>
            <div className='imageProjectContainer'>
                <img src={Quidditch} />
            </div>
            <div className='textProjectContainer'>
                <p className='langagesProject'> HTML / PHP - 2e version React JS / Express JS </p>
                <p className='whenProject'> R301 - Développement Web </p>
                <p className='descProject'> Application de gestion d'une équipe de quidditch </p>
                <a className='gitProjectLink' href='https://github.com/D4rkP4ng0l1n/Quidditch' target='_blank'> 
                    <button> Github ( Version React ) </button>
                </a>
                <a className='gitProjectLink' href='https://projetphpquidditch.000webhostapp.com/' target='_blank'> 
                    <button> Accéder au site ( Version HTML / PHP ) ( Login : guest / Mdp : 1234) </button>
                </a>
            </div>
        </div>
    );
};

export default R301_ProjetQuidditch;