import React, { useState, useEffect } from 'react';
import { Card, Button, Carousel, Row, Col } from 'react-bootstrap';
import { database } from '../../firebase';
import { ref, onValue } from 'firebase/database';
import logo from '../Imagenes/chlogo.png';
import './CampanasPagina.css'; // Asegúrate de tener un archivo CSS para estilos personalizados

const CampanasPagina = () => {
  const [eventos, setEventos] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const eventosRef = ref(database, 'eventos');
    onValue(eventosRef, (snapshot) => {
      const data = snapshot.val();
      const eventosArray = data
        ? Object.keys(data)
            .map(key => ({ id: key, ...data[key] }))
            .filter(evento => evento.estado === 'Activo')
        : [];
      setEventos(eventosArray);
    });
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Función para dividir los eventos en grupos de 4
  const chunkedEventos = eventos.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index / 3);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // iniciar un nuevo chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
      {chunkedEventos.map((eventosChunk, chunkIndex) => (
        <Carousel.Item key={chunkIndex}>
          <Row className="g-3 mx-0">
            {eventosChunk.map((evento) => (
              <Col key={evento.id} md={3} className="flex-grow-0 flex-shrink-0" style={{ width: '33.3333%' }}>
                <Card>
                  <Card.Img variant="top" src={evento.imagen || logo} alt={evento.titulo} />
                  <Card.Body>
                    <Card.Title>{evento.titulo}</Card.Title>
                    <Card.Text>{evento.descripcion}</Card.Text>
                    <Button variant="primary">Leer más</Button>
                  </Card.Body>
                
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CampanasPagina;
