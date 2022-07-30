// Import redux
import { createStore } from "redux";

// Create the reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  return state;
};

// Create the store
const store = createStore(counterReducer);

// Export store - needs to be provided (typically highest level we can go / to the top)
export default store;
