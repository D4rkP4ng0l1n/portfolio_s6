import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
                <h1 className='title'> Me contacter </h1>
                <div style={{textAlign: 'center', marginTop: '50px'}}>
                    <p> Vous pouvez me contacter par e-mail, téléphone ou via LinkedIn. </p>
                    <ul style={{listStyleType: 'none', padding: '0'}}>
                        <li>
                            <strong> E-mail : </strong> clem.rieuneau@gmail.com
                        </li>
                        <li>
                            <strong> Téléphone : </strong> 06 12 10 06 92
                        </li>
                        <li>
                            <strong> LinkedIn : </strong> <a href="https://www.linkedin.com/in/clément-rieuneau-b13a3a260/" target="_blank" rel="noopener noreferrer">Mon Profil LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </body>
        </>
    );
};

export default Contact;