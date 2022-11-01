import { useReducer } from "react";
import { reducer } from "../hook/Reducer";

export const initialState = 0;

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrease = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrease = () => {
    dispatch({ type: "decrement" });
  };

  const handleClear = (e) => {
    dispatch({ type: "clear" });
  };
  return (
    <div className="counter-container">
      <div className="heading">
        <h1>Counter App</h1>
      </div>
      <div className="result">
        <h2>{state}</h2>
      </div>
      <div className="buttons-container">
        <button className="bttns" onClick={handleIncrease}>
          +
        </button>
        <button className="bttns" onClick={handleDecrease}>
          -
        </button>
        <button className="bttns" onClick={handleClear}>
          C
        </button>
        <button className="bttns">set</button>
      </div>
    </div>
  );
};

export default Counter;
