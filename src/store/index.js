// Import redux
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

// Create the store - pass an configuration object expected by configureStore()
// You only have one configureStore and one root reducer
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

// Export store - needs to be provided (typically highest level we can go / to the top: index.js)
export default store;
