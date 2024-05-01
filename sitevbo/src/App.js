import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Principal from './Components/Principal/Principal';
import BomberosVoluntarios from './Components/RedVoluntarios/BomberosVoluntarios/BomberosVoluntarios';
import Animalistas from './Components/RedVoluntarios/Animalistas/Animalistas';
import Ambientalistas from './Components/RedVoluntarios/Ambientalistas/Ambientalistas';
import Educacion from './Components/RedVoluntarios/Educacion/Educacion';

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/BomberosV" element={<BomberosVoluntarios />} />
          <Route path="/AnimalistasV" element={<Animalistas />} />
          <Route path="/AmbientalistasV" element={<Ambientalistas />} />
          <Route path="/EducacionV" element={<Educacion />} />
          
          {/* Aquí puedes añadir más rutas según sea necesario */}
        </Routes>
      
    </Router>
  );
}

export default App;
