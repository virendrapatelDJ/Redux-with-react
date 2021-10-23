import { createSlice } from "@reduxjs/toolkit";
const multiplierInitialState = { result: 1 };

const multiplierSlice = createSlice({
  name: "multiplier",
  initialState: multiplierInitialState,
  reducers: {
    multiply(state, { type, payload }) {
      console.log("in Slice", type, payload);
      state.result *= payload;
    },
    reset(state) {
      return multiplierInitialState;
    },
  },
});

// const multiplierReducer = (state = multiplierInitialState, action) => {
//   const { type, payload } = action;
//   console.log({ state, action });

//   if (type === multiplierActions.MULTIPLY) {
//     return {
//       result: state.result * payload,
//     };
//   }
//   if (type === multiplierActions.RESET) {
//     return multiplierInitialState;
//   }

//   return state;
// };

const multiplierReducer = multiplierSlice.reducer;
const multiplierActions = multiplierSlice.actions;

export default multiplierReducer;
export { multiplierActions };
