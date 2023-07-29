import { useSelector } from 'react-redux';
import { AButton, AIcon } from '../../../../shared/components/UI/atoms';
import { selectAllWeather } from '../../../../redux/weather/weather-selectors.js';

import './styles.scss';

export const WeatherDay = () => {
  const weatherArray = useSelector(selectAllWeather);
  const currentWeather = weatherArray.current;
  const hourlyWeather = Object.values(weatherArray.hourly.data);

  return (
    <div className="weather-day">
      <div className="weather-day__container">
        <div className="weather-day__icon">
          <AIcon name={currentWeather.summary} size="60" />
        </div>
        <div className="weather-day__temperature-now">
          {Math.round(currentWeather.temperature)}&#xb0;
        </div>
        <div className="weather-day__table">
          <div className="weather-day__info">
            <div className="weather-day__info-title">Wind</div>
            <div className="weather-day__info-title">Humidity</div>
            <div className="weather-day__info-title">Precipitation</div>
          </div>
          <div>
            <div className="weather-day__info-subtitle">
              {Math.round((currentWeather.wind.speed * 3600) / 1000)} km/h
            </div>
            <div className="weather-day__info-subtitle">??%</div>
            <div className="weather-day__info-subtitle">
              {currentWeather.precipitation.total} mm
            </div>
          </div>
        </div>
      </div>

      <div className="weather-day__list">
        {hourlyWeather.map((el) => (
          <div key={el} className="weather-day__element">
            <div className="weather-day__element-title">
              {el.date.slice(11, 16)}
            </div>
            <AIcon name={el.summary} size="40" />
            <div className="weather-day__element-temp">
              {Math.round(el.temperature)}&#176;
            </div>
            <div className="weather-day__icon-container">
              <AIcon
                name={el.cloud_cover.total <= 50 ? 'drop' : 'middle drop'}
                size="15"
              />
              {el.cloud_cover.total + '%'}
            </div>
          </div>
        ))}
      </div>

      <AButton to="/day">See More</AButton>
    </div>
  );
};
