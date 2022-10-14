import "./App.css";


function App() {

  //esempio di variabili 
  const anni = 16;
  const nome = 'pippo'
  const respinto = 'non ACCETTATO'
  const isRed = false; 
  const isOnline = false;
  const isReady = false; 
  const isHacked = false; 

  //arrays list
  const utenti = ["pippo","alex","sergej","william","Peter"];

  const insegnanti = [''];

  const users = [

    {
      nome: "Pippo", anni: 39 
    },
    { nome: "Bob", anni: 34 },
    { nome: "Lim", anni: 23},
    { nome: "Marek", anni: 21}

  ];


  const programmers = [
    {
      nome: "Jack", stack: "java"
    },

    {
      nome: "Peter", stack: "PHP"
    },

    {
      nome: "Fabius", stack: "html"
    }
    
  ]
  

  return (

    <div className="App">
      {anni >= 18  ? <h1>{nome} ha {anni} anni</h1> : <h2>{respinto}</h2>}

      <h1 style={{color: isRed ? "red" : "green"}}>COLORE TESTO </h1>

      <h2>{users.map((user, key) => {
          return <User nome={user.nome} anni={user.anni} />;
      })}

        </h2>

        <h3>{programmers.map((programmer, key) => {
          return <Programmer nome={programmer.nome} stack={programmer.stack} />
        })}</h3>
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      {props.nome}{props.anni}
    </div>
  );
}


const Programmer = (props) => {
  return (
    <div>
        {props.nome} {props.stack}
    </div>
  )
}
export default App; 