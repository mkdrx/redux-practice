// Import redux
import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

// Create the reducer function
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }
  if (action.type === "toggle") {
    return { showCounter: !state.showCounter, counter: state.counter };
  }
  return state;
};

// Create the store
const store = createStore(counterReducer);

// Export store - needs to be provided (typically highest level we can go / to the top: index.js)
export default store;
