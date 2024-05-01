import React, { useState, useEffect } from 'react';
import { database } from '../../../firebase';
import { ref, onValue } from 'firebase/database';
import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import '../BomberosVoluntarios/BomberosVoluntarios.css';

const Educacion = () => {
    const [unidades, setUnidades] = useState([]);
    const [filtro, setFiltro] = useState('');

    useEffect(() => {
        const unidadesRef = ref(database, '/educacion');
        onValue(unidadesRef, (snapshot) => {
            const data = snapshot.val();
            const unidadesArray = data ? Object.keys(data).map(key => ({
                id: key,
                ...data[key],
            })) : [];
            setUnidades(unidadesArray);
        });
    }, []);

    const unidadesFiltradas = unidades.filter(
        unidad => unidad.ciudad.toLowerCase().includes(filtro.toLowerCase()) ||
                  unidad.nombre.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <div>
            <NavBar/>
            <div className="bomberos-voluntarios">
                <h1>Educacion</h1>
                <input
                    type="text"
                    placeholder="Buscar por ciudad o nombre"
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                />
                <div className="unidades-lista">
                    {unidadesFiltradas.map(unidad => (
                        <div key={unidad.id} className="unidad">
                            <img src={unidad.imagen || 'default-image.png'} alt={unidad.nombre} />
                            <h3>{unidad.nombre}</h3>
                            <p>Ciudad: {unidad.ciudad}</p>
                            <p>Telefono: {unidad.telefono}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Educacion;
