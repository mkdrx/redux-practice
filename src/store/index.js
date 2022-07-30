// Import redux
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// Prepare a slice of our global state
// receives an object with a name of your choice, the initial state and the reducers: methods with the current state and (not necessary) action
// With increase() we need data related to the action
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// Create the store - pass an configuration object expected by configureStore()
const store = configureStore({
  reducer: counterSlice.reducer,
});

// Actions creators will create action objects that have already a type property with an unique id per action
export const counterActions = counterSlice.actions;

// Export store - needs to be provided (typically highest level we can go / to the top: index.js)
export default store;
