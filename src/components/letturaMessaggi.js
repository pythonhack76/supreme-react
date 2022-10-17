/***
 * 
 * 
 * respect rules!
 * tm 2022
 * programming by SpriteCoder
 */

import React from "react";

function CaselladiPosta(props){
    const messaggiNonLetti = props.messaggiNonLetti; 
    return (
        <div>
            <h1>Salve!</h1>
            {messaggiNonLetti.length > 0 && (
                <h2>
                    Hai {messaggiNonLetti.length} messaggi non letti
                </h2>
            )}
        </div>
    );
}

const messaggi = ['Prova messaggio', 'Re: Prova messaggio', 'Test messaggi'];


export default CaselladiPosta