import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Light from "./components/Light";

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  
  return (
    <>
      <Light />
      <Counter />
    </>
  );
}

export default App;
