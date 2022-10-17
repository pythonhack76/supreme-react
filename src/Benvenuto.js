
  function BottoneLogin(props){
    return <button onClick={props.onClick}>Login</button>
  }


  function BottoneLogout(props){
    return <button onClick={props.onClick}>Logout</button>

  }
  
  
  function BenvenutoUtente(props){
    return <h1>Bentornato/a!</h1>  
    
  }

  function BenvenutoOspite(props){
    return <h1>Autenticati, per favore!</h1>
  }
  
  function Benvenuto(props){
    const utenteAutenticato = props.utenteAutenticato; 
    if (utenteAutenticato) {
      return <BenvenutoUtente />
    }
      return <BenvenutoOspite />
  }





export default Benvenuto; 
