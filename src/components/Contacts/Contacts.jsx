import React from 'react';
import './style/Contacts.css';
import linkedin from './image/linkedin.png';
import gmail from './image/gmail.png';
import github from './image/github.jpg';
import avatar1 from './image/avatar1.png';

const Contacts = () => {
    return (
        <section id="Contacts">

            <div className="contacts-container">

                <h1 className="contacts-title">CONTACTS</h1>

                <div className="contacts-content">

                    <ul className="contacts-list">

                        <li>
                            <div className="contacts-item">
                                <img src={github} alt="github" className="icona_github" />
                                <a href="https://github.com/FrancescoRuocco10" target="_blank" rel="noopener noreferrer">
                                    @FrancescoRuocco10
                                </a>
                            </div>
                        </li>

                        <li>
                            <div className="contacts-item">
                                <img src={gmail} alt="gmail" className="icona_gmail" />
                                <a href="mailto:francesco.job.z.10@gmail.com">
                                    francesco.job.z.10@gmail.com
                                </a>
                            </div>
                        </li>

                        <li>
                            <div className="contacts-item">
                                <img src={linkedin} alt="linkedin" className="icona_linkedin" />
                                <a href="https://www.linkedin.com/in/francesco-ruocco-a855021a2" target="_blank" rel="noopener noreferrer">
                                    Francesco Ruocco
                                </a>
                            </div>
                        </li>

                    </ul>

                    <img src={avatar1} alt="avatar" className="avatar" />

                </div>

                <div className="privacy-text">
                    <p>Il curriculum vitae è disponibile su richiesta: è possibile inoltrare una richiesta via email oppure compilare il Form. <br />
                    Per motivi legati alla privacy e al trattamento dei dati personali, non è possibile rendere pubblici i miei dati sensibili; pertanto, il curriculum, verrà fornito solo su richiesta diretta e verificabile.
                    </p>
                </div>

            </div>

        </section>
    );
};

export default Contacts;