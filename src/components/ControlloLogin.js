import React from "react";
import Benvenuto from "../Benvenuto";

function BottoneLogin(props){
    return <button onClick={props.onClick}>Login</button>
}

function BottoneLogout(props){
    return <button onClick={props.onClick}>Logout</button>
}

class ControlloLogin extends React.Component {

    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {utenteAutenticato: false};
    }

    handleLoginClick() {
        this.setState({utenteAutenticato: true});
    }

    handleLogoutClick(){
        this.setState({utenteAutenticato: false});
    }

    render(){
        const utenteAutenticato = this.state.utenteAutenticato;
        let bottone; 

        if (utenteAutenticato){
            bottone = ( 
                <BottoneLogout onClick={this.handleLogoutClick} />
            );
        } else {
            bottone = (
                <BottoneLogin onClick={this.handleLoginClick} />
            );
        } 
        
        
        
        
    

    return (
        <div>
        <Benvenuto utenteAutenticato={utenteAutenticato} />
        {bottone}
        </div>
    );
}

}


export default ControlloLogin
