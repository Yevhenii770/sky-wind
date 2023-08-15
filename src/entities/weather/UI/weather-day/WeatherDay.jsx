import { useSelector } from 'react-redux';
import { AButton, AIcon } from '../../../../shared/components/UI/atoms';
import { selectAllWeather } from '../../../../redux/weather/weather-selectors.js';
import { MSliderDay } from '../../../../shared/components/UI/molecules/MSliderDay';

import './styles.scss';

export const WeatherDay = () => {
  const weatherArray = useSelector(selectAllWeather);
  const currentWeather = weatherArray.current;

  return (
    <div className="weather-day">
      <div className="weather-day__container">
        <div className="weather-day__icon">
          <AIcon name={currentWeather.summary} size="55" />
        </div>
        <div className="weather-day__temperature-now">
          {Math.round(currentWeather.temperature)}&#xb0;
        </div>
        <div className="weather-day__table">
          <div className="weather-day__info">
            <div className="weather-day__info-title">Wind</div>
            <div className="weather-day__info-title">Cloud cover</div>
            <div className="weather-day__info-title">Precipitation</div>
          </div>
          <div className="weather-day__info">
            <div className="weather-day__info-subtitle">
              {Math.round((currentWeather.wind.speed * 3600) / 1000)} km/h
            </div>
            <div className="weather-day__info-subtitle">
              {currentWeather.cloud_cover} %
            </div>
            <div className="weather-day__info-subtitle">
              {currentWeather.precipitation.total} mm
            </div>
          </div>
        </div>
      </div>
      <MSliderDay />
      <AButton to="/day">See More</AButton>
    </div>
  );
};
