import React from 'react';
import styles from './Projects.module.css';

export default function Proyects(){
    return(
        <>
        <section className="projects section" id="projects">
            <div className="container">
                <div className="section__header">
                    <span className="section__subtitle">Mi trabajo</span>
                    <h2 className="section__title">Proyectos Destacados</h2>
                    <p className="section__description">
                        Una selección de proyectos que demuestran mis habilidades y pasión por el desarrollo
                    </p>
                </div>
                
                <div className="projects__grid">
                    <!-- Project 1 -->
                    <article className="project__card">
                        <div className="project__image">
                            <div className="project__placeholder">
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <div className="project__overlay">
                                <a href="#" target="_blank" rel="noopener noreferrer" classNameName="project__link">
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                                <a href="https://github.com/MonserratSantiago8/MonserratDelAngel_Amazon" target="_blank" rel="noopener noreferrer" classNameName="project__link">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                        <div className="project__content">
                            <h3 className="project__title">E-Commerce Platform</h3>
                            <p className="project__description">
                                Plataforma de comercio electrónico con carrito de compras, 
                                autenticación de usuarios y pasarela de pagos integrada.
                            </p>
                            <div className="project__tech">
                                <span className="tech">React</span>
                                <span className="tech">Node.js</span>
                                <span className="tech">MongoDB</span>
                            </div>
                        </div>
                    </article>

                    <article className="project__card">
                        <div className="project__image">
                            <div className="project__placeholder">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <div className="project__overlay">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="project__link">
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                                <a href="https://github.com/tu-usuario/proyecto-2" target="_blank" rel="noopener noreferrer" className="project__link">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                        <div className="project__content">
                            <h3 className="project__title">Dashboard Analytics</h3>
                            <p className="project__description">
                                Panel de control interactivo para visualización de datos 
                                con gráficos dinámicos y reportes automatizados.
                            </p>
                            <div className="project__tech">
                                
                                <span className="tech">Python</span>
                                <span className="tech">Django</span>
                                <span className="tech">Chart.js</span>
                            </div>
                        </div>
                    </article>
                    
                    <!-- Project 3 -->
                    <article className="project__card">
                        <div className="project__image">
                            <div className="project__placeholder">
                                <i className="fas fa-robot"></i>
                            </div>
                            <div className="project__overlay">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="project__link">
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                                <a href="https://github.com/tu-usuario/proyecto-3" target="_blank" rel="noopener noreferrer" className="project__link">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                        <div className="project__content">
                            <h3 className="project__title">AI Chatbot Assistant</h3>
                            <p className="project__description">
                                Asistente virtual inteligente con procesamiento de lenguaje 
                                natural y respuestas contextuales.
                            </p>
                            <div className="project__tech">
                                <span className="tech">Python</span>
                                <span className="tech">TensorFlow</span>
                                <span className="tech">Flask</span>
                            </div>
                        </div>
                    </article>
                </div>
                
                <div className="projects__more">
                    <a href="https://github.com/MonserratSantiago8" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                        <i className="fab fa-github"></i> Ver más en GitHub
                    </a>
                </div>
            </div>
        </section>
        </>
    )
}