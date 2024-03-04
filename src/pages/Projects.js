import React from 'react';
import Navbar from '../components/Navbar';
import R301_ProjetQuidditch from '../components/R301_ProjetQuidditch';
import R401_ProjetAPIGestionBlog from '../components/R401_ProjetAPIGestionBlog';
import R4A10_MessagerieDuSUD from '../components/R4A10_MessagerieDuSUD';
import R5A04_ProjetLabyrinthe from '../components/R5A04_ProjetLabyrinthe';
import R5A12_AlgoGen from '../components/R5A12_AlgoGen';
import SAE_S3_EasySport from '../components/SAE_S3_EasySport';
import SAE_S5_WekinGames from '../components/SAE_S5_WekinGames';
import Stage_EcoCab from '../components/Stage_EcoCab';

const Projects = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
                <h1 className='title'> Mes Projets </h1>
                <div className='projectsContainer'>
                    <Stage_EcoCab />

                    <SAE_S5_WekinGames />
                    <R5A12_AlgoGen />
                    <R5A04_ProjetLabyrinthe />

                    <R4A10_MessagerieDuSUD />
                    <R401_ProjetAPIGestionBlog />

                    <SAE_S3_EasySport />
                    <R301_ProjetQuidditch />
                </div>
            </body>
        </>
    );
};

export default Projects;