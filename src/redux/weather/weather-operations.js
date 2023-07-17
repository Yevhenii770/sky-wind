import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://api.weatherapi.com/v1';

export const fetchWeather = createAsyncThunk(
  'wether/weatherApi',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${baseUrl}/current.json`, {
        params: {
          key: import.meta.env.VITE_WEATHER_API_KEY,
          q: '50.468361,30.500375',
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
