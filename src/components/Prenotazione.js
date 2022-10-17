import React from "react"

class Prenotazione extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            presente: true,
            numeroOspiti: 2,
        }; 

        this.handleInputChange = this.handleInputChange.bind(
            this
        );

    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name; 

        this.setState({
            [name]: value,

        });
    }

    render() {
        return (
            <form>
                <label>
                    Sarà presente: 
                
                <input name="presente" type="checkbox" checked={this.state.presente} onChange={this.handleInputChange} />
                </label>
            </form>
        )
    }


}


export default Prenotazione 