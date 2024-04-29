// src/components/Principal/Slider/Slider.js

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import cbbaImage from '../../Imagenes/cbbas_700x180.jpg'; // Asegúrate de que la extensión es correcta y la ruta también
import LaPaz from '../../Imagenes/lpaz_700x180.jpg';
import scruzImageII from '../../Imagenes/scczz.jpg';

const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        {/* Aquí debes colocar la imagen que desees, por ahora solo se mostrará texto */}
        <img
          className="d-block w-100"
          src={LaPaz}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>La Paz</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cbbaImage}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Cochabamba</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={scruzImageII}
          alt="Santa Cruz"
        />
        <Carousel.Caption>
          <h3>Santa Cruz</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
