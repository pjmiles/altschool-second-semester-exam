import { initialState } from "./Counter";

export const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "clear":
      return state === initialState;
    default:
      throw new Error();
  }
};
