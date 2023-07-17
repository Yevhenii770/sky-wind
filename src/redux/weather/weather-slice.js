import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather } from './weather-operations';

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const weatherSlice = createSlice({
  name: 'wether',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchWeather.pending, handlePending)
      .addCase(fetchWeather.rejected, handleRejected)
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.items = action.payload;
      }),
});
export const weatherReducer = weatherSlice.reducer;
