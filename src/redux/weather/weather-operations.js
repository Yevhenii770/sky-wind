import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const baseUrl = 'https://www.meteosource.com/api/v1';

export const fetchCityByCoordinates = createAsyncThunk(
  'wether/fetchCityByCoordinates',
  async (coordArr, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/free/point?lat=${coordArr[0]}&lon=${
          coordArr[1]
        }&sections=current%2Chourly&language=en&units=auto&key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchWeather = createAsyncThunk(
  'wether/fetchWeather',
  async (coordArr, thunkAPI) => {
    try {
      const res = await axios.get(
        `${baseUrl}/free/point?lat=${coordArr[0]}&lon=${
          coordArr[1]
        }&sections=current%2Chourly&language=en&units=auto&key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
