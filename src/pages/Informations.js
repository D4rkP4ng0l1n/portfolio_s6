import React from 'react';
import ReactPlayer from 'react-player';
import CV from '../CV/CV.pdf';
import Navbar from '../components/Navbar';

const Informations = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <h1 className='title'> Informations </h1>
            <div className='informationsContainer'>
                <div className="links">
                    <a href='https://www.linkedin.com/in/clément-rieuneau-b13a3a260/'>
                        <button class="link">
                            <i class="fab fa-linkedin"></i>
                            LinkedIn
                        </button>
                    </a>
                    <a href='https://github.com/D4rkP4ng0l1n'>
                        <button class="link">
                            <i class="fab fa-github"></i>
                            GitHub
                        </button>
                    </a>
                </div>
                <div className='CVsContainer'>
                    <div className='CVVideo'>
                        <h2> CV Vidéo </h2>
                        <div className="videoWrapper">
                            <ReactPlayer
                                className='videoPlayer'
                                url="https://www.youtube.com/watch?v=NnybD4I-8VY"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                    <div className='CVPDF'>
                        <h2> CV </h2>
                        <iframe
                            title="CV"
                            allowFullScreen="yes"
                            width="100%"
                            height="394px"
                            src={CV}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Informations;
