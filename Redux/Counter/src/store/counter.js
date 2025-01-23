import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: { counterval: 0 },
  reducers: {
    increment(state) {
      state.counterval++;
    },
    decrement(state) {
      state.counterval--;
    },
    Addition(state, action) {
      state.counterval = state.counterval + Number(action.payload);
    },
    Subtraction(state, action) {
      state.counterval = state.counterval - Number(action.payload);
    },
  },
});
export const counteractions = counterSlice.actions;
export default counterSlice;
