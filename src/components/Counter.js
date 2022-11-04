import { useReducer, useState } from "react";
import { reducer } from "../hook/Reducer";

export const initialState = 0;

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [openInputModal, setOpenInputModal] = useState(false);
  const [value, setValue] = useState("");

  const handleIncrease = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrease = () => {
    dispatch({ type: "decrement" });
  };

  const handleClear = (e) => {
    dispatch({ type: "clear" });
  };

  const handleInputValue = () => {
    dispatch({ type: "setValue" });
  };

  const handleSetValue = () => {
    setOpenInputModal(true);
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: "increment"})
  }

  return (
    <div className="counter-container">
      <div className="heading">
        <h1>Counter App</h1>
      </div>
      <div className="result">
        <h2>{state}</h2>
      </div>
      <div>
        {openInputModal && (
          <form onSubmit={handleSubmit}>
            <input placeholder="set value" type="number" onChange={handleInputValue} />
            <button>set</button>
          </form>
        )}
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
        <button className="bttns" onClick={handleSetValue}>
          set
        </button>
      </div>
    </div>
  );
};

export default Counter;
