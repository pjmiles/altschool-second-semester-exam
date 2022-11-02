import { initialState } from "../components/Counter";

export const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "clear":
      return initialState;
    default:
      throw new Error();
  }
};
