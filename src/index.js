import React from "react";
import ReactDOM from "react-dom/client";
// Import the provider from redux and wrap the app with it
import { Provider } from "react-redux";
// Import the store and pass it as a prop with a value
import store from "./store/index";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
