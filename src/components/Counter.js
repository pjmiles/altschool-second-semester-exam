import { useReducer, useState } from "react";
import { reducer } from "../hook/Reducer";
import Footer from "./Footer";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, userInput: "" });
  const [openInputModal, setOpenInputModal] = useState(false);

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
    dispatch({ type: "set", payload: (state = value) }); //payload should be state.value
    //this is not perfect, value state needs to be inside the reducer instead of handling the value seperately
    //this function will be modified
  };

  return (
    <div className="counter-container">
      <div className="heading">
        <h1>Counter</h1>
      </div>
      <div className="result">
        <h2>{state.count}</h2>
      </div>
      <div>
        {openInputModal && (
          <form onSubmit={handleSubmit}>
            <input
              placeholder="set value"
              type="number"
              id="num"
              value="0"
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
