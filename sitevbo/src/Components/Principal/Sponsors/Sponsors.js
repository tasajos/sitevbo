import React from 'react';
import './Sponsors.css'; // Asegúrate de importar la hoja de estilos
import tsfImage from '../../Imagenes/tsf.png';
import tsbImage from '../../Imagenes/tsb.jpg';
import kpnImage from '../../Imagenes/kpnr2.png';

const Sponsors = () => {
    const sponsors = [
        {
            name: "Tunari Sin Fuego",
            role: "",
            img:  tsfImage, // Tunari Sin Fuego
            facebookUrl: "https://www.facebook.com/TunariSinFuego"
        },
        {
            name: "Todos Somos Bolivia",
            role: "",
            img: tsbImage, // Reemplaza con la ruta a la imagen correspondiente
            facebookUrl: "https://www.facebook.com/TodosSomosBoliviaa"
        },
        {
            name: "Fundacion Kpn",
            role: "",
            img: kpnImage,
            facebookUrl: "https://www.facebook.com/kpnsafetybolivia" // Reemplaza con la ruta a la imagen correspondiente
        }
    ];

    return (
        <div className="sponsors-section">
            <h2>Conoce a Nuestras Fundaciones Auspiciadoras</h2>
            <p></p>
            <div className="sponsors-grid">
                {sponsors.map(sponsor => (
                    <div className="sponsor-item" key={sponsor.name}>
                        <img src={sponsor.img} alt={sponsor.name} />
                        <h3>{sponsor.name}</h3>
                        {/*<p>{sponsor.role}</p>*/}
                        <a href={sponsor.facebookUrl} target="_blank" rel="noopener noreferrer" className="facebook-btn">Facebook</a>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sponsors;
