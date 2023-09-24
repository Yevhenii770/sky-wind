import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCityByCoordinates,
  fetchCity,
  fetchWeather,
  fetchWeatherMap,
} from './weather-operations';

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
    layer: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchWeather.pending, handlePending)
      .addCase(fetchWeather.rejected, handleRejected)
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCityByCoordinates.pending, handlePending)
      .addCase(fetchCityByCoordinates.rejected, handleRejected)
      .addCase(fetchCityByCoordinates.fulfilled, (state, action) => {
        state.city = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchWeatherMap.pending, handlePending)
      .addCase(fetchWeatherMap.rejected, handleRejected)
      .addCase(fetchWeatherMap.fulfilled, (state, action) => {
        state.layer = action.payload;
        state.isLoading = false;
      }),
});

export const userLocation = createSlice({
  name: 'location',
  initialState: {
    location: [],
    selectedCity: null,
  },
  reducers: {
    addCoords(state, action) {
      state.location = action.payload;
    },
    addUserCity(state, action) {
      state.selectedCity = action.payload;
    },
    setCoordinates(state, action) {
      state.location = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCity.pending, handlePending)
      .addCase(fetchCity.rejected, handleRejected)
      .addCase(fetchCity.fulfilled, (state, action) => {
        state.location = [action.payload[0].lat, action.payload[0].lon];
      }),
});

export const weatherReducer = weatherSlice.reducer;
export const userReducer = userLocation.reducer;

export const { addCoords } = userLocation.actions;
export const { addUserCity } = userLocation.actions;
