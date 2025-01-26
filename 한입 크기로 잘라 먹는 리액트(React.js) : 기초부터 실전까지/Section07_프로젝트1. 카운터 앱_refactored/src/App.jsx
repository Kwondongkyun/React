import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useReducer } from "react";

const CountReducer = (count, action) => {
  switch (action.type) {
    case "INCREASE":
      return count + action.data;

    case "DECREASE":
      return count - action.data;
    default:
      count;
  }
};

function App() {
  const [count, dispatch] = useReducer(CountReducer, 0);

  const changeCount = (value) => {
    if (value > 0) {
      dispatch({
        type: "INCREASE",
        data: value,
      });
    } else {
      dispatch({
        type: "DECREASE",
        data: value,
      });
    }
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller changeCount={changeCount} />
      </section>
    </div>
  );
}

export default App;
