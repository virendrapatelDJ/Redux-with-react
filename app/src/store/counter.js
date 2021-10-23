import { createSlice } from "@reduxjs/toolkit";

const counterReducerInitialState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: counterReducerInitialState,

  reducers: {
    increase: (state, { payload }) => {
      console.log("counter reducer");
      state.value += payload || 1;
    },
    decrease: (state, { payload }) => {
      state.value -= payload || 1;
    },
  },
});

const counterReducer = counterSlice.reducer;
const counterActions = counterSlice.actions;

export default counterReducer;
export { counterActions };
