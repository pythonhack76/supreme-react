import React from "react";

class FormNome extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleMessage = this.handleMessage(this);
        //this.messaggio = 'pippo'
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('E\' stato inserito un nome: ' + this.state.value);
        event.preventDefault(); 
        
    }    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                Seleziona:
                </label>
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="pompelmo">Pompelmo</option>
                <option value="limone">limone</option>
                <option value="cocco">cocco</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        );
    }


}

export default FormNome