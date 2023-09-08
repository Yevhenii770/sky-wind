import { createAsyncThunk } from '@reduxjs/toolkit';
import Notification from '../../entities/weather/notification';
import axios from 'axios';

const baseUrl = 'https://www.meteosource.com/api/v1';
const openweathermap = 'https://api.openweathermap.org/data/3.0/';

export const fetchCityByCoordinates = createAsyncThunk(
  'wether/fetchCityByCoordinates',
  async (coordArr, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/free/nearest_place?lat=${coordArr[0]}&lon=${
          coordArr[1]
        }&key=${import.meta.env.VITE_WEATHER_API_KEY}`
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
        `${openweathermap}onecall?lat=${coordArr[0]}&lon=${
          coordArr[1]
        }&units=imperial&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchWeatherByCity = createAsyncThunk(
  'weather/fetchWeatherByCity',
  async (city, thunkAPI) => {
    try {
      const res = await axios.get(
        `${baseUrl}/free/point?place_id=${city.trim()}&sections=all&timezone=UTC&language=en&units=metric&key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      return res.data;
    } catch (error) {
      Notification(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
