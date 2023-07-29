import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const baseUrl = 'https://www.meteosource.com/api/v1';

export const fetchCityByCoordinates = createAsyncThunk(
  'wether/fetchCityByCoordinates',
  async (coordArr, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${coordArr[0]}+${coordArr[1]}&language=en&key=af7a1994362e4288a0f96129d7ff48b6`
      );

      return data.results[0].components.city;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchWeather = createAsyncThunk(
  'wether/fetchWeather',
  async (city, thunkAPI) => {
    try {
      const res = await axios.get(
        `${baseUrl}/free/point?place_id=${city}&sections=all&timezone=UTC&language=en&units=metric&key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
