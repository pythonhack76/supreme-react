import React from "react";


function MessaggioAvviso(props){
    if (!props.attenzione){

        return null; 
    }

    return <div className="warning">Attenzione</div>;
}

class Pagina extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mostraAvviso: true};
        this.handleToggleClick = this.handleToogleClick.bind(
            this
        );
    }
}



