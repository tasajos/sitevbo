// src/Components/ConvierteteVoluntario/ConvierteteVoluntario.js
import React, { useState } from 'react';
import { database } from '../../firebase'; // Asegúrate de que la ruta es correcta
import { ref, push } from 'firebase/database';
import NavBar from '../NavBar/NavBar'; // Ajusta la ruta relativa según sea necesario
import Footer from '../Footer/Footer'; // Ajusta la ruta relativa según sea necesario
import './Convolun.css';

const Convolun = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [comentario, setComentario] = useState('');
    const [pais, setPais] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const voluntarioRef = ref(database, 'voluntariosContactos24');
        push(voluntarioRef, {
            nombre,
            email,
            ciudad,
            pais,
            comentario
        });
    
        setNombre('');
        setEmail('');
        setCiudad('');
        setPais('');
        setComentario('');
        alert('Gracias por registrarte como voluntario!');
    };

    return (
        
        <div>
              <NavBar />
        <div className="voluntario-form">
        <form onSubmit={handleSubmit}>
    <h2>Conviértete en Voluntario</h2>
    <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre completo"
        required
    />
    <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo electrónico"
        required
    />
    <input
        type="text"
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
        placeholder="Ciudad"
        required
    />
    <input
        type="text"
        value={pais}
        onChange={(e) => setPais(e.target.value)}
        placeholder="País"
        required
    />
    <textarea
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        placeholder="Comentario"
        required
    />
    <button type="submit">Registrar</button>
</form>
            
        </div>
        <Footer />
       
        </div>
      
       
    );
};

export default Convolun;
