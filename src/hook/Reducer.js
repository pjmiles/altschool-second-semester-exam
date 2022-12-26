// import { initialState } from "../components/Counter";

export const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      if (state.count > 0) {
        return { ...state, count: state.count - 1 };
      } else {
        return state;
      }
    case "clear":
      return { ...state, count: (state.count = 0), userInput: action.payload };
    case "set":
      return { ...state, userInput: action.payload };
    default:
      throw new Error();
    // state;
  }
};
