import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Jobs from './Jobs';
import Benvenuto from './Benvenuto';
import LoggingButton from './components/Logging';
import ControlloLogin from './components/ControlloLogin';
import CaselladiPosta from './components/letturaMessaggi';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Jobs />
    <LoggingButton />
    <ControlloLogin />
    <Benvenuto utenteAutenticato={true} /> 
    <CaselladiPosta messaggiNonLetti={['pippo','giovanni','pluto']} />
   
  </React.StrictMode>
);



