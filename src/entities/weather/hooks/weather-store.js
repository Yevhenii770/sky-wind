import { create } from 'zustand';
import { weatherApi } from '../api/weather-api';

export const useWeatherStore = create((set) => ({
  weather: null,
  setWeather: (weather) => set({ weather }),
  fetchWeather: async () => {
    const weather = await weatherApi.getWeather();

    set({ weather });
  },
}));
