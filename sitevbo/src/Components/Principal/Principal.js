import React from 'react';
import './Principal.css';  // Importa los estilos específicos
import NavBar from '../NavBar/NavBar'; // Ajusta la ruta relativa según sea necesario
import Slider from './Slider/Slider'; // Ajusta la ruta relativa según sea necesario
import Footer from '../Footer/Footer'; // Ajusta la ruta relativa según sea necesario
import CampanasPagina from '../CampanasPagina/CampanasPagina'; // Ajusta la ruta relativa según sea necesario

function Principal() {
    return (

        <div>
            <NavBar />
        <div className="principal">
            <h1>Bienvenidos a la Plataforma VBO</h1>
            <p>Explora las campañas activas</p>
            {/* Aquí podrás añadir más componentes como listas de campañas, etc. */}

            <Slider /> <br></br> <br></br>
            <h1>Eventos</h1>
            <br></br>
            <CampanasPagina /> <br></br> <br></br>
        </div>

        <Footer />
        
        </div>


    );
}

export default Principal;