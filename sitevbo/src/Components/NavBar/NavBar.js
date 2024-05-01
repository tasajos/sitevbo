import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'; // Asegúrate de que el nombre del archivo coincida
import logo from '../Imagenes/Voluntarios.png'; // Asegúrate de tener una imagen de logo

const NavBar = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} height="40" className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Mueve el Form antes de Nav para que se alinee a la izquierda */}
          <Form className="align-left">
            <FormControl type="search" placeholder="Buscar" className="mr-sm-2" />
          </Form>
          {/* Los elementos Nav seguirán alineados a la derecha */}
          <Nav className="ml-auto">
          <LinkContainer to="/">
            <Nav.Link>Inicio</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Red de Voluntarios" id="basic-nav-dropdown">
            <LinkContainer to="/BomberosV">
              <NavDropdown.Item>Bomberos Voluntarios</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/AnimalistasV">
              <NavDropdown.Item>Animalistas</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/AmbientalistasV">
              <NavDropdown.Item>Ambientalistas</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/EducacionV">
              <NavDropdown.Item>Educacion</NavDropdown.Item>
            </LinkContainer>
            
           
            {/* Más ítems aquí */}
          </NavDropdown>
          <LinkContainer to="/ConVol">
            <Nav.Link>Conviertete en Voluntario</Nav.Link>
          </LinkContainer>
          <Nav.Link href="/Emergencia">Emergencias</Nav.Link>
          {/* Usa un enlace directo para una URL externa */}
         <a href="https://vbo.chakuy.com" className="btn btn-outline-success">
         Iniciar Sesión</a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
