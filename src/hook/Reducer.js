// import { initialState } from "../components/Counter";

export const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "clear":
      return { ...state, count: (state.count = 0) };
    case "set":
      return { ...state, userInput: action.payload };
    default:
      throw new Error();
      // state;
  }
};
