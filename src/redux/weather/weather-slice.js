import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather, fetchCityByCoordinates } from './weather-operations';

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
    city: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchWeather.pending, handlePending)
      .addCase(fetchWeather.rejected, handleRejected)
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCityByCoordinates.rejected, handleRejected)
      .addCase(fetchCityByCoordinates.fulfilled, (state, action) => {
        state.city = action.payload;
      }),
});

export const userLocation = createSlice({
  name: 'location',
  initialState: {
    location: [],
    city: '',
  },
  reducers: {
    addCoords(state, action) {
      state.location = action.payload;
    },
    addUserCity(state, action) {
      state.city = action.payload;
    },
  },
});

export const weatherReducer = weatherSlice.reducer;
export const userReducer = userLocation.reducer;

export const { addCoords } = userLocation.actions;
export const { addUserCity } = userLocation.actions;
