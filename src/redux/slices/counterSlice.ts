import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an async thunk action
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number, thunkAPI) => {
    return new Promise<number>((resolve) =>
      setTimeout(() => resolve(amount), 1000)
    );
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    status: "idle", // additional state to track async status
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.value += action.payload;
        state.status = "idle";
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export const selectCount = (state: { counter: { value: any } }) =>
  state.counter.value;

export default counterSlice.reducer;
