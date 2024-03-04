import React from 'react';

import Api from './../images/API.png';

const R401_ProjetAPIGestionBlog = () => {
    return (
        <div className='projectContainer'>
            <h2 className='projectTitle'> API Gestion Blog </h2>
            <div className='imageProjectContainer'>
                <img src={Api} />
            </div>
            <div className='textProjectContainer'>
                <p className='langagesProject'> HTML / PHP </p>
                <p className='whenProject'> R401 - Architecture Logicielle </p>
                <p className='descProject'> Application de gestion d'un blog à l'aide d'API </p>
                <a className='gitProjectLink' href='https://github.com/D4rkP4ng0l1n/R4.01_ProjetAPIGestionBlog' target='_blank'> 
                    <button> Github </button>
                </a>
            </div>
        </div>
    );
};

export default R401_ProjetAPIGestionBlog;