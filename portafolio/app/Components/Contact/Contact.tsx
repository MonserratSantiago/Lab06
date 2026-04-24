import React from 'react';
import styles from './Contact.module.css';

export default function Contact(){
    return(
        <>
         <section className="contact section" id="contact">
            <div className="container">
                <div className="contact__content">
                    <div className="contact__info">
                        <span className="section__subtitle">¿Tienes un proyecto?</span>
                        <h2 className="section__title">¡Hablemos!</h2>
                        <p className="contact__description">
                            Estoy disponible para oportunidades laborales, proyectos freelance 
                            o simplemente para conectar. ¡No dudes en contactarme!
                        </p>
                        
                        <div className="contact__data">
                            <div className="contact__item">
                                <div className="contact__icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact__text">
                                    <span className="contact__label">Email</span>
                                    <a href="mailto:tu@email.com" className="contact__value">tu@email.com</a>
                                </div>
                            </div>
                            
                            <div className="contact__item">
                                <div className="contact__icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="contact__text">
                                    <span className="contact__label">Ubicación</span>
                                    <span className="contact__value">Ciudad, País</span>
                                </div>
                            </div>
                            
                    <!-- ERROR 9: El texto "Disponible para trabajar" no tiene el estilo verde
                         PISTA: Falta el modificador de clase que indica disponibilidad -->
                            <div className="contact__item">
                                <div className="contact__icon">
                                    <i className="fas fa-briefcase"></i>
                                </div>
                                <div className="contact__text">
                                    <span className="contact__label">Disponibilidad</span>
                                    <span className="contact__value contact__value--available">Disponible para trabajar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact__cta">
                        <div className="contact__card">
                            <h3 className="contact__card-title">¿Listo para comenzar?</h3>
                            <p className="contact__card-text">
                                Envíame un mensaje y te responderé lo antes posible.
                            </p>
                            <a href="mailto:tu@email.com" className="btn btn--primary btn--large btn--full">
                                <i className="fas fa-paper-plane"></i> Enviar mensaje
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}