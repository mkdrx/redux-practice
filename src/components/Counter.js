// Import the hook from react-redux team - used for getting date from the store
// Import useDispatch hook for dispatching actions
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  // Allows to select a part from the store
  // changes to the redux store will make this component to re-render using the latest counter
  const counter = useSelector((state) => state.counter);

  // Set dispatch function - dispatches an action against redux store
  const dispatch = useDispatch();

  // Handlers
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
