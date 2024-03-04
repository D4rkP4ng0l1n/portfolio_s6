import React from 'react';

import MessagerieSUD from './../images/MessagerieSUD.png';

const R4A10_MessagerieDuSUD = () => {
    return (
        <div className='projectContainer'>
            <h2 className='projectTitle'> Messagerie </h2>
            <div className='imageProjectContainer'>
                <img src={MessagerieSUD} />
            </div>
            <div className='textProjectContainer'>
                <p className='langagesProject'> Java Script </p>
                <p className='whenProject'> R4A10 - Complément Web </p>
                <p className='descProject'> Messagerie en ligne </p>
                <a className='gitProjectLink' href='https://la-messagerie-du-sud.000webhostapp.com/' target='_blank'>
                    <button> Accéder à la messagerie </button>
                </a>
            </div>
        </div>
    );
};

export default R4A10_MessagerieDuSUD;