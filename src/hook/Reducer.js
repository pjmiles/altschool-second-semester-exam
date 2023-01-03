
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
      return { ...state, count: (state.count = 0) };
    case "set":
      return {
        ...state,
        count: (state.count = action.payload),
        userInput: action.payload,
      };
    default:
      throw new Error();
  }
};
