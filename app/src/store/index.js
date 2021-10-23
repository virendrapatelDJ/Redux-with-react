import { createStore, combineReducers } from "redux";

const counterActions = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
const multiplierActions = {
  MULTIPLY: "multiplierActions/multiply",
  RESET: "multiplierActions/reset",
};
const counterReducerInitialState = { value: 0 };
const multiplierInitialState = { result: 1 };

const counterReducer = (state = counterReducerInitialState, action) => {
  const { type, payload } = action;
  console.log({ state, action });

  if (type === counterActions.INCREMENT) {
    return {
      value: state.value + payload,
    };
  }
  if (type === counterActions.DECREMENT) {
    return {
      value: state.value - payload,
    };
  }

  return state;
};
const multiplierReducer = (state = multiplierInitialState, action) => {
  const { type, payload } = action;
  console.log({ state, action });

  if (type === multiplierActions.MULTIPLY) {
    return {
      result: state.result * payload,
    };
  }
  if (type === multiplierActions.RESET) {
    return multiplierInitialState;
  }

  return state;
};

// const store = createStore(counterReducer);

const rootReducer = combineReducers({
  multiplier: multiplierReducer,
  counter: counterReducer,
});

const store = createStore(rootReducer);
export { multiplierActions, counterActions, store };
