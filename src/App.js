import './App.css';
import {useEffect, useState} from "react";
import Axios from "axios";

function App() {

  const [fact,setFact] = useState("");

  const getFact = () => {
    Axios.get("https://catfact.ninja/fact").then((response)=>{
      setFact(response.data.fact);
    });
  }

  useEffect(
    ()=>{
      getFact();
    },[]
  );

  return (
    <div className="App">
      <button onClick={getFact}>Generate cat fact</button>
      <button onClick={()=>setFact("")}>Clear</button>
      <p> {fact} </p>
    </div>
  );
}

export default App;
