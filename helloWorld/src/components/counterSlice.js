import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCounterValue } from "../API/counterApi";

export const loadCounterValue = createAsyncThunk(
  "counter/loadCounterValue",
  async () => {
    const value = await fetchCounterValue();
    return value;
  },
);

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    status: "idle",
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCounterValue.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadCounterValue.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value = action.payload;
      })
      .addCase(loadCounterValue.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
export const selectCounterValue = (state) => state.counter.value;
export default counterSlice.reducer;
