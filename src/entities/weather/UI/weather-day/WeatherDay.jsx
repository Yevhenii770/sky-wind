import { useEffect } from 'react';
import './styles.scss';
import { weatherApi } from '../../api/weather-api';
import { useWeatherStore } from '../../hooks/weather-store';

export const WeatherDay = () => {
  const weatherStore = useWeatherStore();

  useEffect(() => {
    weatherStore.fetchWeather();
  }, []);

  return <div className="weather-day">123</div>;
};
