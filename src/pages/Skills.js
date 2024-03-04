import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Skills = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
                <h1 className='title'> Les compétences du Programme National </h1>
                <div className='skillsContainer'>
                    <div className='realiser'>
                        <h1> Réaliser </h1>
                        <ul>
                            <li>
                                Elaborer une application informatique
                            </li>
                            <li>
                                Faire évoluer une application informatique
                            </li>
                            <li>
                                Maintenir en conditions opérationnelles une application informatique
                            </li>
                        </ul>
                        <NavLink to='/projets/realiser'>
                            <button> Projets </button>
                        </NavLink>
                    </div>
                    <div className='optimiser'>
                        <h1> Optimiser </h1>
                        <ul>
                            <li>
                                Améliorer les performances des programmes dans des contextes contraints
                            </li>
                            <li>
                                Limiter l'impact environnemental d'une application informatique
                            </li>
                            <li>
                                Mettre en place des applications informatiques adaptées et efficaces
                            </li>
                        </ul>
                        <button> Projets </button>
                    </div>
                    <div className='administrer'>
                        <h1> Administrer </h1>
                        <ul>
                            <li>
                                Déployer une nouvelle architecture technique
                            </li>
                            <li>
                                Améliorer une infrastructure existante
                            </li>
                            <li>
                                Sécuriser les applications et les services
                            </li>
                        </ul>
                        <button> Projets </button>
                    </div> 
                    <div className='gerer'>
                        <h1> Gérer </h1>
                        <ul>
                            <li>
                                Lancer un nouveau projet
                            </li>
                            <li>
                                Sécuriser des données
                            </li>
                            <li>
                                Exploiter des données pour la prise de décisions
                            </li>
                        </ul>
                        <button> Projets </button>
                    </div>
                    <div className='conduire'>
                        <h1> Conduire </h1>
                        <ul>
                            <li>
                                Lancer un nouveau projet
                            </li>
                            <li>
                                Piloter le maintien d’un projet en condition opérationnelle
                            </li>
                            <li>
                                Faire évoluer un système d’information
                            </li>
                        </ul>
                        <button> Projets </button>
                    </div>
                    <div className='collaborer'>
                        <h1> Collaborer </h1>
                        <ul>
                            <li>
                                Lancer un nouveau projet
                            </li>
                            <li>
                                Organiser son travail en relation avec celui de son équipe
                            </li>
                            <li>
                                Élaborer, gérer et transmettre de l’information
                            </li>
                        </ul>
                        <button> Projets </button>
                    </div>
                </div>
            </body>
        </>
    );
};

export default Skills;