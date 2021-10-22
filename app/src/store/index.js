import { createStore } from "redux";

const counterActions = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log({ state, action });

  if (type === counterActions.INCREMENT) {
    return {
      counter: state.counter + payload,
    };
  }
  if (type === counterActions.DECREMENT) {
    return {
      counter: state.counter - payload,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export { counterActions, store };
