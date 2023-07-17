import { configureStore } from '@reduxjs/toolkit';

import { weatherReducer } from './weather/weather-slice';

/// Наш стор
export const store = configureStore({
  reducer: {
    data: weatherReducer,
  },
});
