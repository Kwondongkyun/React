import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Light from "./components/Light";

function App() {
  return (
    <>
      <Light />
      <Counter />
    </>
  );
}

export default App;
