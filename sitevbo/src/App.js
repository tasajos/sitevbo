import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Principal from './Components/Principal/Principal';

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<Principal />} />
          
          {/* Aquí puedes añadir más rutas según sea necesario */}
        </Routes>
      
    </Router>
  );
}

export default App;
