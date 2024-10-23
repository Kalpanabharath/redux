import { createSlice } from "@reduxjs/toolkit";

export let counterReducer = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export let { increment, decrement } = counterReducer.actions;
export default counterReducer.reducer;
