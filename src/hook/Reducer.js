// import { initialState } from "../components/Counter";

export const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "clear":
      return state = 0;
    case "set":
      return { ...state, state: action.payload };
    default:
      // throw new Error();
      state
  }
};
