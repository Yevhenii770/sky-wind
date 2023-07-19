import { configureStore } from '@reduxjs/toolkit';
import { weatherReducer } from './weather/weather-slice';

export const store = configureStore({
  reducer: {
    data: weatherReducer,
  },
});
