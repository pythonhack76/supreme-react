import "./App.css";
import { useState } from 'react';

function App() {

  //inseriamo una task 
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
      setNewTask(event.target.value);
  };

  const addTask = () => {
      const newTodoList = [...todoList, newTask];
      setTodoList(newTodoList);
  };


  //let age = 0;
  const [age, setAge] = useState(0);

  const [showText, setShowText] = useState(false);
  const [textColor, setTextColor ]  = useState(""); 
  const [count, setCount] = useState(0);

  const aumenta = () => {
    setCount(count + 1);
  };

  const decrementa = () => {
    setCount(count - 1);
  };

  const azzera = () => {
    setCount(0);
  };

  const [viewMessage, setViewMessage] = useState('messaggio');


  const incrementaAnni = () => {
    setAge(age + 1); 
    
    console.log(age);

  };

  const decrementaAnni = () => {
    setAge(age - 1); 
    
    console.log(age);
  };

  const [inputValue, setInputValue ] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);



  };


  return (

    <div className="App">
      <div classNae="addTask">
      <input onChange={handleChange} />
      <button onClick={addTask}>Aggiungi Task</button>
      </div>
      <div className="list">
      {todoList.map((cazzo) => {
        return <h1>{cazzo}</h1>
      })}
      </div>

      <button onClick={() => { 
        setTextColor(textColor === "black" ? "green" : "black");
        //setShowText(!showText)

      }}>
        Nascondi/Mostra
        </button>
      <h1 style={{ color: textColor}}>the code Name</h1>

      {age}

      <button onClick={incrementaAnni}>Incrementa</button>
      <button onClick={decrementaAnni}>Decrementa</button>

      <input type="text" onChange={handleInputChange} />
      <p class="blocco">{inputValue }</p>

      <fieldset>
        <legend>Conta</legend>
        <button onClick={aumenta}>Aumenta</button>
        <button onClick={decrementa}>Decrementa</button>
        <button onClick={azzera}>Azzera</button>
        <p>{count}</p>
      </fieldset>
    </div>
  ); 


}

export default App;