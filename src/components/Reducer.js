export const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "clear":
      return state === "";
    default:
      throw new Error();
  }
};
