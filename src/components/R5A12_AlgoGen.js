import React from 'react';

import PbVoyageur from './../images/PbVoyageur.png';

const R5A12_AlgoGen = () => {
    return (
        <div className='projectContainer'>
            <h2 className='projectTitle'> Algorithme Génétique </h2>
            <div className='imageProjectContainer'>
                <img src={PbVoyageur} />
            </div>
            <div className='textProjectContainer'>
                <p className='langagesProject'> Python </p>
                <p className='whenProject'> R5A12 - Modelisation maths </p>
                <p className='descProject'> Algorithme résolvant le problème du voyageur </p>
                <a className='gitProjectLink' href='https://github.com/D4rkP4ng0l1n/PbDuVoyageur' target='_blank'> 
                    <button> Github </button>
                </a>
            </div>
        </div>
    );
};

export default R5A12_AlgoGen;