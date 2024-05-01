import React from 'react';
import './Promo.css'; // Importa la hoja de estilos

const Promo = () => {
    return (
        <div className="promo-section">
            <div className="promo-content">
                <h1>Únete a Nuestra Red de Voluntarios</h1>
                <p>Participa en una comunidad dedicada a hacer una diferencia significativa a través del voluntariado en áreas como el bienestar animal, la protección ambiental y el apoyo comunitario.</p>
                <button className="get-started">Participa Ahora</button>
                <div className="features">
                    <p>✔ Oportunidades en múltiples áreas</p>
                    <p>✔ Conecta con otros voluntarios</p>
                    <p>✔ Capacitación y desarrollo personal</p>
                </div>
            </div>
            <div className="promo-quote">
                <blockquote>
                    “Cada pequeño esfuerzo cuenta, y juntos podemos lograr grandes cambios.”
                    <footer></footer>
                </blockquote>
            </div>
        </div>
    );
};

export default Promo;
