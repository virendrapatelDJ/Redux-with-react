import { counterActions } from "./actions";

const counterReducerInitialState = { value: 0 };

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

export default counterReducer;
