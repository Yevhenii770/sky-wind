import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://www.meteosource.com/api/v1';

export const fetchWeather = createAsyncThunk(
  'wether/weatherApi',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(
        `${baseUrl}/free/point?place_id=london&sections=all&timezone=UTC&language=en&units=metric&key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
