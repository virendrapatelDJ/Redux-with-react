import { multiplierActions } from "./actions";

const multiplierInitialState = { result: 1 };

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

export default multiplierReducer;
