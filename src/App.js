import "./App.css";
import { User } from "./User";

import { Variabili
 } from "./components/variables";

 import { LoggingButton } from "./components/Logging"

import React from "react";


function App() {

  
  //esempio di variabili 
const anni = 16;
const nome = 'pippo'
const respinto = 'non ACCETTATO'
const isRed = false; 
const isOnline = false;
const isReady = false; 
const isHacked = false; 
 

 
  
  

  //arrays list
  const utenti = ["pippo","alex","sergej","william","Peter"];

  const insegnanti = [''];

  const users = [

    {nome: "Pippo", anni: 39},
    { nome: "Bob", anni: 34 },
    { nome: "Lim", anni: 23},
    { nome: "Marek", anni: 21}

  ];


  const pianeti = [
    {nome: "Mercurio", isRocketPlanet: true},
    {nome: "Venere", isRocketPlanet: true},
    {nome: "Terra", isRocketPlanet: true},
    {nome: "Marte", isRocketPlanet: true},
    {nome: "Giove", isRocketPlanet: false},
    {nome: "Saturno", isRocketPlanet: true},
    {nome: "Nettuno", isRocketPlanet: true},
    {nome: "Urano", isRocketPlanet: true},


  ];
  


  const programmers = [
    {
      nome: "Jack", stack: "java"
    },

    {
      nome: "Peter", stack: "PHP"
    },

    {
      nome: "Fabius", stack: "html"
    }
    
  ]
  

  return (

    <div className="App">

            
    {pianeti.map((pianeta, key) => !pianeta.isRocketPlanet && (
      <h1>{pianeta.nome}</h1>
    ))}



      {anni >= 18  ? <h1>{nome} ha {anni} anni</h1> : <h2>{respinto}</h2>}

      <h1 style={{color: isRed ? "red" : "green"}}>COLORE TESTO </h1>

      <h2>{users.map((user, key) => {
          return <User nome={user.nome} anni={user.anni} />;
      })}

        </h2>

        <h3>{programmers.map((programmer, key) => {
          return <Programmer nome={programmer.nome} stack={programmer.stack} />
        })}</h3>
    </div>
  );
}









const Programmer = (props) => {
  return (
    <div>
        {props.nome} {props.stack}
    </div>
  )





}




export default App; 