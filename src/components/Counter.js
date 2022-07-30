// Import the hook from react-redux team - used for getting date from the store
// Import useDispatch hook for dispatching actions
import { useSelector, useDispatch } from "react-redux";
// Import the actions from redux toolkit
import { counterActions } from "../store";

import classes from "./Counter.module.css";

const Counter = () => {
  // Allows to select a part from the store
  // changes to the redux store will make this component to re-render using the latest counter

  // counter selector
  const counter = useSelector((state) => state.counter);

  // showCounter selector
  const show = useSelector((state) => state.showCounter);

  // Set dispatch function - dispatches an action against redux store
  const dispatch = useDispatch();

  // Handlers
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // {type: SOME_ID, payload: 10}
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
