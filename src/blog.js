import React from "react";

function Blog(props){
    const sidebar = (
        <ul>
            {props.articoli.map((articolo) => 
            <li key={articolo.id}>
                {articolo.titolo}
            </li>
            )}
        </ul>
    );

    const contenuto = props.articoli.map((articolo) => 
    <div key={articolo.id}>

                <h3>{articolo.titolo}</h3>
                <p> { articolo.testo } </p>

    </div>
    );
    return (
        <div>
            {sidebar}
            <hr />
            {contenuto}
        </div>
    );
}

const articoli = [
    {id: 1, titolo: 'Titolo', testo: 'titolo del primo articolo'},
    {id: 2, titolo: 'Installazione sito', testo: 'Un nuovo contenuto per il nostro sito web'}
];

export default Blog