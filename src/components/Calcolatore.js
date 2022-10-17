import React from "react";

import VerdettoEbollizione from "./Ebolizione";
import VerdettoTermica from "./Ebolizione";

const scale = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

const termica = {
    b: 'Base',
    s: 'Superiore'
};


class InputTermica extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { stato_termica: ''};
    }

    handleChange(e){
        this.setState({termica: e.target.value});
    }

    render(){
        const stato_termica = this.stato_termica; 
        return (
            <fieldset>
                <legend>Inserisci stato:</legend>
                <input value={stato_termica} onChange={this.handleChange} />
                <VerdettoTermica celsius={parseFloat(termica)} />
            </fieldset>
        )
    }
}


class InputTemperatura extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperatura: ''};
    }

    handleChange(e){
        this.setState({temperatura: e.target.value});
    }

    render() {
        const temperatura = this.props.temperatura;
        const scala = this.props.scala;
        return (
            <fieldset>
                <legend>Inserisci una temepratura in gradi {scale[scala]}:</legend>
                <input value={temperatura} onChange={this.handleChange} />
                <VerdettoEbollizione celsius={parseFloat(temperatura)} />
            </fieldset>
        )
    }

            }


class Calcolatore extends React.Component {
   
    render() {
        return (
            <div>
                <InputTemperatura scala="c" />
                <InputTemperatura scala="f" />
                <InputTermica termica="c" />
            </div>
        );
    }

   

   
}



export default Calcolatore 