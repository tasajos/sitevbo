import React from 'react';
import logo from '../Imagenes/Voluntarios.png'; // Asegúrate de que la ruta al logo es correcta
import './Footer.css'; // Importa el archivo CSS donde defines los estilos

const Footer = () => {
  return (
    <footer className="footer bg-primary text-center text-lg-start text-white">
      <div className="container p-4">
        <div className="row my-4">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
            <div>
              <img src={logo} alt="Logo" className="mb-4" style={{ height: '120px' }} />
              <p>VBO</p>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Inicio</a></li>
              <li><a href="/Emergencia" className="footer-link">Emergencias</a></li>
              <li><a href="/ConVol" className="footer-link">Conviertete en Voluntario</a></li>
            
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Proyectos</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="footer-link">Equipamiento Voluntarios</a></li>
              <li><a href="#!" className="footer-link">Forestacion</a></li>
              
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Contacto</h5>
            <ul className="list-unstyled">
              <li><p><i className="fas fa-map-marker-alt pe-2"></i> Bolivia</p></li>
              <li><p><i className="fas fa-phone pe-2"></i> +591 70776212</p></li>
              <li><p><i className="fas fa-envelope pe-2"></i> informaciones@chakuy.com</p></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Derechos reservados:
        <a className="footer-link" href="https://chakuy.com/"> Chakuy</a>
      </div>
    </footer>
  );
};

export default Footer;