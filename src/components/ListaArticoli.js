import React from "react";

export default function ListaArticoli() {


    const numeri = [1,2,3,4,5,6];
const lista = numeri.map((numero) => {
    <li key={numero.toString()}>
        {numero}
    </li>
})


function Numero(props){
    return <li>{props.valore}</li>
}
function ListaNumeri(props){
    const numeri = props.numeri; 
    const lista = numeri.map((numero) => 
    <Numero key={numero.toString()} valore={numero} />
    );
    return (
        <ul>
            {lista}
        </ul>
    );
}
}





