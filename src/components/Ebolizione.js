import React from "react";

function VerdettoTermica(props){
    if (props.termica >= 20){
        return <p>Valore alto</p>
    }
    return <p>Valore basso</p>
}

function VerdettoEbollizione(props){
    if (props.celsius >= 100) {
        return <p>L'acqua bolle</p>;

    }

    return <p>L'acqua non bolle</p> 


}

function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32; 
}

function conversione(temperatura, converti) {
    const input = parseFloat(temperatura);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = converti(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString(); 
}


export default VerdettoEbollizione