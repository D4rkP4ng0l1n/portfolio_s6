import React from 'react';

import EcoCabAccueil from './../images/PageAccueilEcoCab.png';

const Stage_EcoCab = () => {
    return (
        <div className='projectContainer'>
            <h2 className='projectTitle'> EcoCab </h2>
            <div className='imageProjectContainer'>
                <img src={EcoCabAccueil} />
            </div>
            <div className='textProjectContainer'>
                <p className='langagesProject'> React JS / Express JS </p>
                <p className='whenProject'> Stage deuxième année de BUT </p>
                <p className='descProject'> Web application de mise en relation de voyageurs </p>
                <a className='gitProjectLink' href='https://github.com/Julesc002/Stage-Ecocab' target='_blank'> 
                    <button> Github </button>
                </a>
            </div>
        </div>
    );
};

export default Stage_EcoCab;