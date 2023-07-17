import { createSlice } from '@reduxjs/toolkit';
import { weatherApi } from './weather-operations';

const weatherSlice = createSlice({
  name: 'wether',
  initialState: {
    items: [],
  },
  //   extraReducers: (builder) =>
  //     builder.addCase(weatherApi.fulfilled, (state, action) => {
  //         state.items = action.payload;
  //     }),
});
export const weatherReducer = weatherSlice.reducer;
