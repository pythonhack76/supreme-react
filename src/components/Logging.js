
import React from "react";

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
        
    }
   
  }



export default LoggingButton

