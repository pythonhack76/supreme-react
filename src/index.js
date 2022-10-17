import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Jobs from './Jobs';
import Benvenuto from './Benvenuto';
import LoggingButton from './components/Logging';
import ControlloLogin from './components/ControlloLogin';
import CaselladiPosta from './components/letturaMessaggi';
import ListaArticoli from './components/ListaArticoli';
import FormNome from './components/FormNomi';
import Prenotazione from './components/Prenotazione';

import Calcolatore from './components/Calcolatore';

import Blog from './blog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   <Prenotazione />
   <Calcolatore />
    
    
    
    
    
    
    
    
   
  </React.StrictMode>
);



