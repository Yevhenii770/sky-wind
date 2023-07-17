import axios from 'axios';

const baseUrl = 'http://api.weatherapi.com/v1';

export const weatherApi = {
  async getWeather() {
    const { data } = await axios.get(`${baseUrl}/current.json`, {
      params: {
        key: import.meta.env.VITE_WEATHER_API_KEY,
        q: '50.468361,30.500375',
      },
    });

    return data;
  },
};
