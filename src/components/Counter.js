import { useReducer } from "react";
import { reducer } from "./Reducer";

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
    dispatch({ type: "clear"})
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{state}</h2>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleClear}>C</button>
      <button>set</button>
    </div>
  );
};

export default Counter;
