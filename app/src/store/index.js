import { createStore, combineReducers } from "redux";
import counterReducer from "./counter";
import multiplierReducer from "./multiplier";

// const store = createStore(counterReducer);

const rootReducer = combineReducers({
  multiplier: multiplierReducer,
  counter: counterReducer,
});

const store = createStore(rootReducer);
export { store };
