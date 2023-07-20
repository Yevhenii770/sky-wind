import { useSelector } from 'react-redux';
import { AButton, AIcon } from '../../../../shared/components/UI/atoms';
import { selectAllWeather } from '../../../../redux/weather/weather-selectors.js';

import './styles.scss';

export const WeatherDay = () => {
  const weatherArray = useSelector(selectAllWeather);
  const currentWeather = weatherArray.current;
  const hourlyWeather = Object.values(weatherArray.hourly.data);
  console.log(hourlyWeather[0]);
  console.log(hourlyWeather[0].precipitation.total);
  console.log(hourlyWeather[0].date);
  console.log(hourlyWeather[0].icon);
  console.log(hourlyWeather[0].temperature);

  return (
    <div className="weather-day">
      <div className="weather-day__container">
        <div className="weather-day__icon">
          <AIcon name="cloud" size="70" />
        </div>
        <div className="weather-day__temperature-now">
          {Math.round(currentWeather.temperature)}&#xb0;
        </div>
        <div className="weather-day__table">
          <div className="weather-day__info">
            <div className="weather-day__info-title">Rain</div>
            <div className="weather-day__info-title">Humidity</div>
            <div className="weather-day__info-title">Wind</div>
          </div>
          <div>
            <div className="weather-day__info-subtitle">
              {currentWeather.precipitation.total}%
            </div>
            <div className="weather-day__info-subtitle">?? %</div>
            <div className="weather-day__info-subtitle">
              {Math.round(currentWeather.wind.speed)} km/h
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
            {/* <AIcon name={el.weatherSvg} size="40" /> */}
            <div className="weather-day__element-temp">
              {Math.round(el.temperature)}&#176;
            </div>
            <div className="weather-day__icon-container">
              <AIcon name="drop" />
              {el.precipitation.total} %
            </div>
          </div>
        ))}
      </div>

      <AButton to="/day">See More</AButton>

      {/* <NavLink  className="weather-day__link-day">
      </NavLink> */}
    </div>
  );
};
