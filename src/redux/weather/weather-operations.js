import { createAsyncThunk } from '@reduxjs/toolkit';
import Notification from '../../entities/weather/notification';
import axios from 'axios';

const openweathermapUrl = 'https://api.openweathermap.org/data/3.0/';
const openweathermapGeocodingUrl = 'http://api.openweathermap.org/geo/1.0/';

export const fetchCityByCoordinates = createAsyncThunk(
  'wether/fetchCityByCoordinates',
  async (coordArr, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${openweathermapGeocodingUrl}reverse?lat=${coordArr[0]}&lon=${
          coordArr[1]
        }&limit=5&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`
      );
      return data[0];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchWeather = createAsyncThunk(
  'wether/fetchWeather',
  async (coordArr, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${openweathermapUrl}onecall?lat=${coordArr[0]}&lon=${
          coordArr[1]
        }&units=imperial&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCity = createAsyncThunk(
  'weather/fetchCity',
  async (city, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${openweathermapGeocodingUrl}direct?q=${city.trim()}&limit=1&appid=${
          import.meta.env.VITE_OPENWEATHERMAP_API_KEY
        }`
      );
      return data;
    } catch (error) {
      Notification(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchWeatherMap = createAsyncThunk(
  'weather/fetchWeatherMap',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://tile.openweathermap.org/map/precipitation_new/1/1/1.png?appid=${
          import.meta.env.VITE_OPENWEATHERMAP_API_KEY
        }`
      );
      return data;
    } catch (error) {
      Notification(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
