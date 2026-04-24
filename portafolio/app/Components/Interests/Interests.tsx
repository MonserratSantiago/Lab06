import React from 'react';
import styles from './Interests.module.css';

export default function Interests(){
    return(
        <><section className="interests section" id="interests">
            <div className="container">
                <div className="section__header">
                    <span className="section__subtitle">Diseño, administración y optimización de bases de datos.</span>
                    <span className="section__subtitle">Construcción de modelos y arquitecturas de datos.</span>
                    <span className="section__subtitle">Transformar grandes volúmenes de información en soluciones escalables.</span>
                    <h2 className="section__title">Modelado y optimización de base de datos SQL,Desarrollo web con JavaScript y control de versiones con Git/Github</h2>
                    <p className="section__description">
                        Ingenería de datos, Data & AI 
                    </p>
                </div>
                
                <div className="interests__grid">
                    <!-- Card 1 -->
                    <!-- ERROR 3: Esta card no tiene el icono visible
                         PISTA: Revisa el contenido del div card__icon, falta el elemento del icono -->
                    <article className="interest__card">
                        <div className="card__icon">
                            <i className="fas fa-code"></i>
                            
                        </div>
                        <h3 className="card__title">Desarrollo Web</h3>
                        <p className="card__description">
                            Creación de aplicaciones web modernas con tecnologías como 
                            HTML5, CSS3, JavaScript y frameworks actuales.
                        </p>
                        <div className="card__tags">
                            <span className="tag">HTML/CSS</span>
                            <span className="tag">JavaScript</span>
                            <span className="tag">React</span>
                        </div>
                    </article>
                    
                    <!-- Card 2 -->
                    
                    <article className="interest__card">
                        <div className="card__icon">
                            <i className="fas fa-shield-halved"></i>
                        </div>
                        <h3 className="card__title">Ciberseguridad</h3>
                        <p className="card__description">
                            Protección de sistemas y datos, análisis de vulnerabilidades 
                            y mejores prácticas de seguridad informática.
                        </p>
                        <div className="card__tags">
                            <span className="tag">Seguridad Web</span>
                            <span className="tag">Pentesting</span>
                            <span className="tag">Redes</span>
                        </div>
                    </article>
                    
                    <!-- Card 3 -->
                    <article className="interest__card">
                        <div className="card__icon">
                            <i className="fas fa-brain"></i>
                        </div>
                        <h3 className="card__title">Inteligencia Artificial</h3>
                        <p className="card__description">
                            Machine Learning, procesamiento de datos y desarrollo de 
                            soluciones inteligentes con Python.
                        </p>
                        <div className="card__tags">
                            <span className="tag">Python</span>
                            <span className="tag">ML</span>
                            <span className="tag">Data Science</span>
                        </div>
                    </article>
                    
                    <!-- Card 4 -->
                    <article className="interest__card">
                        <div className="card__icon">
                            <i className="fas fa-database"></i>
                        </div>
                        <h3 className="card__title">Bases de Datos</h3>
                        <p className="card__description">
                            Diseño, administración y optimización de bases de datos 
                            relacionales y NoSQL.
                        </p>
                        <div className="card__tags">
                            <span className="tag">MySQL</span>
                            <span className="tag">PostgreSQL</span>
                            <span className="tag">MongoDB</span>
                        </div>
                    </article>
                    
                    <!-- Card 5 -->
                    <article className="interest__card">
                        <div className="card__icon">
                            <i className="fas fa-mobile-screen-button"></i>
                        </div>
                        <h3 className="card__title">Desarrollo Móvil</h3>
                        <p className="card__description">
                            Creación de aplicaciones móviles nativas y multiplataforma 
                            para Android e iOS.
                        </p>
                        <div className="card__tags">
                            <span className="tag">Flutter</span>
                            <span className="tag">React Native</span>
                            <span className="tag">Kotlin</span>
                        </div>
                    </article>
                    
                    <!-- Card 6 -->
                    <article className="interest__card">
                        <div className="card__icon">
                            <i className="fas fa-cloud"></i>
                        </div>
                        <h3 className="card__title">Cloud Computing</h3>
                        <p className="card__description">
                            Servicios en la nube, arquitecturas escalables y 
                            despliegue de aplicaciones.
                        </p>
                        <div className="card__tags">
                            <span className="tag">AWS</span>
                            <span className="tag">Azure</span>
                            <span className="tag">Docker</span>
                        </div>
                    </article>
                </div>
                
                <!-- Relevant Subjects -->
                <div className="subjects">
                    <h3 className="subjects__title">
                        <i className="fas fa-graduation-cap"></i> Materias Relevantes
                    </h3>
                    <div className="subjects__list">
                        <span className="subject">Programación Orientada a Objetos</span>
                        <span className="subject">Estructuras de Datos</span>
                        <span className="subject">Algoritmos</span>
                        <span className="subject">Redes de Computadoras</span>
                        <span className="subject">Ingeniería de Software</span>
                        <span className="subject">Bases de Datos</span>
                        <span className="subject">Sistemas Operativos</span>
                        <span className="subject">Desarrollo Web</span>
                    </div>
                </div>
            </div>
        </section></>
    );
}