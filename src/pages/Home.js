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
                <h1 className='title'> Accueil </h1>
                    <div className="homeContent">
                        <p> Portfolio BUT Informatique 2021 - 2024 </p>
                        <p> RIEUNEAU Clément </p>
                    </div>

                <div className="homeBGImage">
                    <img className='image' src={backgroundImage} />
                </div>
            </body>
        </>
    );
};

export default Home;