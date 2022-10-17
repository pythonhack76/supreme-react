
import React from "react";
import Pagina from "./messaggioAvvisi";

class LoggingButton extends React.Component{
    handleClick() {
      console.log('il valore di `this` è: ', this);
    };
  
    render() {
        return (
      <button onClick={() => this.handleClick()}>
        Clicca
      </button>
      
        );
        <Pagina />
       
    }
   
  }



export default LoggingButton

