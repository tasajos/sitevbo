import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Imagenes/chlogo.png';
const CampanasPagina = () => {
  return (
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={logo}  />
            <Card.Body>
              <Card.Title>Titulo de la Campaña</Card.Title>
              <Card.Text>
                Algunas descripciones rápidas sobre la campaña. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Button variant="primary">Leer más</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Última actualización hace 3 minutos</small>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CampanasPagina;
