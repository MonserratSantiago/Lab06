import React from 'react';
import styles from './Cv.module.css';

export default function Cv(){
    return(
       <> <section className="cv section" id="cv">
            <div className="container">
                <div className="cv__content">
                    <div className="cv__info">
                        <span className="section__subtitle">Conoce mi trayectoria</span>
                        <h2 className="section__title">Mi Currículum</h2>
                        <p className="cv__description">
                            Descarga mi CV para conocer mi formación académica, habilidades 
                            técnicas y experiencia. También puedes conectar conmigo en mis 
                            redes profesionales.
                        </p>
                        
                        <div className="cv__buttons">
                            <a href="https://monserratsantiago.github.io/lab05MonserratGuadalupeDelAngelSantiago/" className="btn btn--primary btn--large">
                                <i className="fas fa-download"></i> Descargar CV
                            </a>
                            <a href="#" className="btn btn--secondary btn--large">
                                <i className="fas fa-eye"></i> Ver CV Digital
                            </a>
                        </div>
                    </div>
                    
                    <div className="cv__social">
                        <h3 className="cv__social-title">Conectemos</h3>
                        <div className="cv__social-links">
                            <a href="https://www.linkedin.com/in/monserrat-guadalupe-del-angel-santiago-a78577337/" target="_blank" rel="noopener noreferrer" className="social__card">
                                <div className="social__icon social__icon--linkedin">
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                                <div className="social__info">
                                    <span className="social__name">LinkedIn</span>
                                    <span className="social__user">@tu-perfil</span>
                                </div>
                                <i className="fas fa-arrow-right social__arrow"></i>
                            </a>
                            
                            <a href="https://github.com/MonserratSantiago8" target="_blank" rel="noopener noreferrer" className="social__card">
                                <div className="social__icon social__icon--github">
                                    <i className="fab fa-github"></i>
                                </div>
                                <div className="social__info">
                                    <span className="social__name">GitHub</span>
                                    <span className="social__user">@tu-usuario</span>
                                </div>
                                <i className="fas fa-arrow-right social__arrow"></i>
                            </a>
                            
                            <a href="mailto:monserratgpedelangelsantiago@gmail.com"" className="social__card">
                                <div className="social__icon social__icon--email">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="social__info">
                                    <span className="social__name">Email</span>
                                    <span className="social__user">tu@email.com</span>
                                </div>
                                <i className="fas fa-arrow-right social__arrow"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}