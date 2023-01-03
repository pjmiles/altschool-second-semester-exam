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
    dispatch({ type: "clear", payload: "" });
  };

  const handleSetValue = (e) => {
    setOpenInputModal(true);
    let maxLen = String(e.target.value);
    if (maxLen.length < 5) {
      dispatch({ type: "set", payload: maxLen }); // max input length set to 4 digits
    }
  };

  const handleSubmit = () => {
    setOpenInputModal(false);
  };

  return (
    <div className="counter-container">
      <div className="heading">
        <h1>Counter</h1>
      </div>
      <div className="result">
        <h2>{state.count}</h2>
      </div>
      <div className="user-input-container">
        {openInputModal && (
          <div>
            <input
              placeholder="set value"
              type="number"
              value={state.userInput}
              onChange={handleSetValue}
            />
            <button className="ok-btn" onClick={handleSubmit}>
              ok
            </button>
          </div>
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
