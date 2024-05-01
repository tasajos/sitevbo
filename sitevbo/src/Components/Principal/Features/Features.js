import React from 'react';
import './Features.css'; // Importa la hoja de estilos CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faFireExtinguisher, faTree, faHandsHelping, faChalkboardTeacher, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
    return (
        <div className="features-section">
            <h2>Conectando Voluntarios para un Mundo Mejor</h2>
            <p>Únete a nuestra red y contribuye al cambio positivo en tu comunidad participando en actividades y eventos organizados.</p>
            <div className="features-grid">
                <div className="feature-item">
                    <div className="icon">
                        <FontAwesomeIcon icon={faPaw} />
                    </div>
                    <h3>Animalistas</h3>
                    <p>Colabora en la protección y bienestar animal participando en rescates y campañas de sensibilización.</p>
                </div>
                <div className="feature-item">
                    <div className="icon">
                        <FontAwesomeIcon icon={faFireExtinguisher} />
                    </div>
                    <h3>Bomberos Voluntarios</h3>
                    <p>Únete a las brigadas de respuesta rápida y ayuda a salvar vidas y propiedades en situaciones de emergencia.</p>
                </div>
                <div className="feature-item">
                    <div className="icon">
                        <FontAwesomeIcon icon={faTree} />
                    </div>
                    <h3>Ambientalistas</h3>
                    <p>Participa en proyectos de conservación y educación ambiental para fomentar un futuro sostenible.</p>
                </div>
                <div className="feature-item">
                    <div className="icon">
                        <FontAwesomeIcon icon={faHandsHelping} />
                    </div>
                    <h3>Trabajo Social</h3>
                    <p>Impulsa cambios sociales positivos apoyando en programas comunitarios y de ayuda directa a quienes más lo necesitan.</p>
                </div>
                <div className="feature-item">
                    <div className="icon">
                        <FontAwesomeIcon icon={faChalkboardTeacher} />
                    </div>
                    <h3>Educación y Capacitación</h3>
                    <p>Forma parte de iniciativas de formación para fortalecer las habilidades de los voluntarios y la comunidad en general.</p>
                </div>
                <div className="feature-item">
                    <div className="icon">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </div>
                    <h3>Eventos y Campañas</h3>
                    <p>Engánchate con eventos y campañas que elevan la conciencia y promueven la activación comunitaria.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;