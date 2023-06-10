import { useEffect } from 'react';
import './styles.scss';
import { useWeatherStore } from '../../hooks/weather-store';
import {
  SeeMoreBtn,
  WeatherSvgSelector,
} from '../../../../shared/components/UI/atoms';

export const WeatherDay = () => {
  const weatherStore = useWeatherStore();

  useEffect(() => {
    weatherStore.fetchWeather();
  }, []);

  return (
    <div className="weather-day">
      <div className="weather-day-card-container">
        <div className="weather-day-icon-now">
          <WeatherSvgSelector id="wheather" size="60" />
        </div>
        <h2 className="weather-day-temperature-now">12&#176;</h2>
        <ul>
          <li>Rain 4%</li>
          <li>Humididti 64%</li>
          <li>Wind 4km/h</li>
        </ul>
      </div>

      <SeeMoreBtn />
    </div>
  );
};
