import React from 'react';
import Navbar from '../components/Navbar';

import backgroundImage from './../images/PhotoMoi.png';

const Home = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
                <h1 className='title'> Portfolio RIEUNEAU Clément </h1>
                    <div className="homeContent">
                        <p> Etudiant en 3e année de développement informatique à l'IUT Paul Sabatier </p>
                    </div>

                <div className="homeBGImage">
                    <img className='image' src={backgroundImage} />
                </div>
            </body>
        </>
    );
};

export default Home;