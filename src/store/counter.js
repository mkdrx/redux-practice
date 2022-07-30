import { createSlice } from "@reduxjs/toolkit";

// Initial state for Counter
const initialCounterState = { counter: 0, showCounter: true };

// Prepare a slice of our global state for the Counter
// receives an object with a name of your choice, the initial state and the reducers: methods with the current state and (not necessary) action
// With increase() we need data related to the action
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

// Actions creators will create action objects that have already a type property with an unique id per action
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
