import counterReducer, { counterActions } from "./counter";
import multiplierReducer, { multiplierActions } from "./multiplier";
import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(counterReducer);

// const rootReducer = combineReducers({
//   multiplier: multiplierReducer,
//   counter: counterReducer,
// });

// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {
    counter: counterReducer,
    multiplier: multiplierReducer,
  },
});

export { store, multiplierActions, counterActions };
