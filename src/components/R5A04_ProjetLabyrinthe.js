import React from 'react';

import Labyrinthe from './../images/Labyrinthe.jpg';

const R5A04_ProjetLabyrinthe = () => {
    return (
        <div className='projectContainer'>
            <h2 className='projectTitle'> Le plus court chemin </h2>
            <div className='imageProjectContainer'>
                <img src={Labyrinthe} />
            </div>
            <div className='textProjectContainer'>
                <p className='langagesProject'> Python </p>
                <p className='whenProject'> R5A04 - Qualite algorithmique </p>
                <p className='descProject'> Programme trouvant le plus court chemin pour sortir d'un labyrinthe </p>
                <a className='gitProjectLink' href='https://github.com/D4rkP4ng0l1n/R5A04---Labyrinthe' target='_blank'> 
                    <button> Github </button>
                </a>
            </div>
        </div>
    );
};

export default R5A04_ProjetLabyrinthe;