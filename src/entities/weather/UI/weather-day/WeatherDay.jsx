import { useEffect } from 'react';
import './styles.scss';
import { useWeatherStore } from '../../hooks/weather-store';
import { SeeMoreBtn } from '../../../../shared/components/UI/atoms';

export const WeatherDay = () => {
  const weatherStore = useWeatherStore();

  useEffect(() => {
    weatherStore.fetchWeather();
  }, []);

  return (
    <div className="weather-day">
      <SeeMoreBtn />
    </div>
  );
};
