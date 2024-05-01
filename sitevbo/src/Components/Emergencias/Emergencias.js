// src/Components/Emergencias/Emergencias.js
import React, { useState, useEffect } from 'react';
import { database } from '../../firebase';
import { ref, onValue, query, orderByChild, equalTo } from 'firebase/database';
import './Emergencias.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Emergencias = () => {
    const [emergencias, setEmergencias] = useState([]);

    useEffect(() => {
        const emergenciasRef = query(ref(database, 'ultimasEmergencias'), orderByChild('estado'), equalTo('Activo'));
        onValue(emergenciasRef, (snapshot) => {
            const data = snapshot.val();
            const emergenciasList = data ? Object.keys(data).map(key => ({
                id: key,
                ...data[key],
            })) : [];
            setEmergencias(emergenciasList);
        });
    }, []);

    return (
        <div>
            <NavBar />
            <div className="emergencias-section">
                <h2>Emergencias Activas</h2>
                {emergencias.map(emergencia => (
                    <div key={emergencia.id} className="emergencia-card">
                        <img src={emergencia.imagen || 'default-image.png'} alt="Emergencia" className="emergencia-imagen" />
                        <div className="emergencia-info">
                            <h3>{emergencia.titulo}</h3>
                            <p>{emergencia.descripcion}</p>
                            <p>Ciudad: {emergencia.ciudad}</p>
                            <p>Fecha: {emergencia.fecha} - Hora: {emergencia.hora}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Emergencias;
