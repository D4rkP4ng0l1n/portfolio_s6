import React from 'react';

import EasySport from './../images/EasySport.png';

const SAE_S3_EasySport = () => {
    return (
        <div className='projectContainer'>
            <h2 className='projectTitle'> EasySport </h2>
            <div className='imageProjectContainer'>
                <img src={EasySport} />
            </div>
            <div className='textProjectContainer'>
                <p className='langagesProject'> Java </p>
                <p className='whenProject'> SAE S3 </p>
                <p className='descProject'> Application de gestion d'une saison d'esport </p>
                <a className='gitProjectLink' href='https://github.com/D4rkP4ng0l1n/SAE---S4/tree/master' target='_blank'> 
                    <button> Github </button>
                </a>
            </div>
        </div>
    );
};

export default SAE_S3_EasySport;