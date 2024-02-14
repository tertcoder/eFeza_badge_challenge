import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    next: (state) => {
      state.value++;
    },
    prev: (state) => {
      state.value--;
    },
    // updateProgress: (state) =>
    //   state.value === 50 ? state.value + 50 : state.value - 50,
  },
});

export const { next, prev } = progressSlice.actions;
export default progressSlice.reducer;
