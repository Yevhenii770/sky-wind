import { configureStore } from '@reduxjs/toolkit';
import { weatherReducer, userLocation } from './weather/weather-slice';

export const store = configureStore({
  reducer: {
    data: weatherReducer,
    user: userLocation.reducer,
  },
});
