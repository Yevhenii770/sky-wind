import { useEffect } from 'react';
import {
  WeatherDay,
  WeatherWeek,
  WeatherLocation,
  useWeatherStore,
} from '../../entities/weather';

export default function Home() {
  const weatherStore = useWeatherStore();

  useEffect(() => {
    weatherStore.fetchWeather();
  }, []);

  return (
    <div className="container" style={{ height: '100%' }}>
      <WeatherLocation />
      <WeatherDay />
      <WeatherWeek />
    </div>
  );
}
