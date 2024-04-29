import React from 'react';
import './Principal.css';  // Importa los estilos específicos
import NavBar from '../NavBar/NavBar'; // Ajusta la ruta relativa según sea necesario
import Slider from './Slider/Slider'; // Ajusta la ruta relativa según sea necesario

function Principal() {
    return (

        <div>
            <NavBar />
        <div className="principal">
            <h1>Bienvenidos a la Plataforma VBO</h1>
            <p>Explora las campañas activas</p>
            {/* Aquí podrás añadir más componentes como listas de campañas, etc. */}

            <Slider />
        </div>
        </div>
    );
}

export default Principal;