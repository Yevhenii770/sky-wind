import { useEffect } from 'react';
import {
  WeatherDay,
  WeatherWeek,
  WeatherLocation,
  useWeatherStore,
} from '../../entities/weather';
import './styles.scss';

function Home() {
  const weatherStore = useWeatherStore();

  useEffect(() => {
    weatherStore.fetchWeather();
  }, []);

  return (
    <div className="container">
      <WeatherLocation />
      <WeatherDay />
      <WeatherWeek />
    </div>
  );
}

export default Home;
