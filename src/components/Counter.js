// Import the hook from react-redux team - used for getting date from the store
// Import useDispatch hook for dispatching actions
import { useSelector, useDispatch } from "react-redux";
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
    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
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
