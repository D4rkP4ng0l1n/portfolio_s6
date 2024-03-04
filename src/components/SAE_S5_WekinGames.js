import React from 'react';

import WekinGames from './../images/WekinGames.png';

const SAE_S5_WekinGames = () => {
    return (
        <div className='projectContainer'>
            <h2 className='projectTitle'> WekinGames </h2>
            <div className='imageProjectContainer'>
                <img src={WekinGames} />
            </div>
            <div className='textProjectContainer'>
                <p className='langagesProject'> React JS / Java Spring </p>
                <p className='whenProject'> SAE S5 </p>
                <p className='descProject'> Web application de création de wikis </p>
                <a className='gitProjectLink' href='https://github.com/Julesc002/WekinGame' target='_blank'> 
                    <button> Github </button>
                </a>
            </div>
        </div>
    );
};

export default SAE_S5_WekinGames;