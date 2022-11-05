import { useReducer, useState } from "react";
import { reducer } from "../hook/Reducer";
import Footer from "./Footer";

export const initialState = 0;

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [openInputModal, setOpenInputModal] = useState(false);
  const [value, setValue] = useState(0);

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
    // setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "set", payload: state = value }); //payload should be state.value
    //this is not perfect, value state needs to be inside the reducer instead of handling the value seperately
    //this function will be modified 
  };

  return (
    <div className="counter-container">
      <div className="heading">
        <h1>Counter</h1>
      </div>
      <div className="result">
        <h2>{state}</h2>
      </div>
      <div>
        {openInputModal && (
          <form onSubmit={handleSubmit}>
            <input
              placeholder="set value"
              type="number"
              onChange={handleInputValue}
            />
            <button onClick={handleSetValue}>set</button>
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
      <Footer />
    </div>
  );
};

export default Counter;
