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

  const handleSetValue = (e) => {
    setOpenInputModal(true);
    dispatch({ type: "set", payload: e.target.value }); //needs to make more value
  };

  const handleSubmit = () => {
    setOpenInputModal(true);
  };

  return (
    <div className="counter-container">
      <div className="heading">
        <h1>Counter</h1>
      </div>
      <div className="result">
        <h2>{state.count}</h2>
        <h3>{state.userInput}</h3>
      </div>
      <div>
        {openInputModal && (
          <form onSubmit={handleSubmit}>
            <input
              placeholder="set value"
              type="number"
              value={state.userInput}
              onChange={handleSetValue}
            />
            <button className="ok-btn">ok</button>
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
