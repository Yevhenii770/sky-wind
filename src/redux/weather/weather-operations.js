import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const baseUrl = 'https://www.meteosource.com/api/v1';

export const fetchCityByCoordinates = createAsyncThunk(
  'wether/fetchCityByCoordinates',
  async (lat, lon, thunkAPI) => {
    try {
      const res = await axios.get(
        `${baseUrl}/free/nearest_place?lat=${lat}&lon=${lon}&key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchWeather = createAsyncThunk(
  'wether/fetchWeather',
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

// export const fetchLocationInfo = createAsyncThunk(
//   'wether/fetchLocationInfo',
//   async (latitude, longitude, thunkAPI) => {
//     try {
//       const { data } = await axios.get(
//         `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=af7a1994362e4288a0f96129d7ff48b6`
//       );
//       console.log({ data });
//       return data.results[0].formatted;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
