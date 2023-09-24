import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AButton, AIcon, ALoader } from '@/shared/components/UI/atoms';
import { selectWeather } from '@/redux/weather/weather-selectors.js';
import { MSliderDay } from '@/shared/components/UI/molecules/MSliderDay';
import { useConvertDegrees, useConvertTime } from '../../hooks';

import './styles.scss';

export const WeatherDay = () => {
  const allWeather = useSelector(selectWeather);

  const { sunrise, sunset, feels_like, wind_deg, temp } = allWeather.current;
  let precipitation = null;
  console.log(allWeather.daily[0].summary);

  useEffect(() => {
    if (allWeather.current.rain !== undefined) {
      precipitation = allWeather.current.rain;
    }
  }, []);

  if (allWeather) {
    return (
      <div className="weather-day">
        <div className="weather-day__container">
          <div className="weather-day__icon">
            <AIcon name={allWeather.current.weather[0].description} size="55" />
          </div>

          <div className="weather-day__temperature-now">
            {String(useConvertDegrees(temp)).slice(0, 2)}&#xb0;
          </div>
          <div className="weather-day__table">
            <div className="weather-day__info">
              <div className="weather-day__info-title">Rain</div>
              <div className="weather-day__info-title">Humidity</div>
              <div className="weather-day__info-title">Wind</div>
            </div>

            <div className="weather-day__info">
              <div className="weather-day__info-subtitle">
                {Math.round(allWeather.hourly[0].pop * 100)} %
              </div>
              <div className="weather-day__info-subtitle">
                {allWeather.current.humidity} %
              </div>
              <div className="weather-day__info-subtitle">
                {Math.round(allWeather.current.wind_speed)} km/h
              </div>
            </div>
          </div>
          <div className="weather-day__sun-time">
            <div>
              <AIcon name="sunrise" size="40" fill="#505565" />
              <div>{useConvertTime(sunrise, 'time').slice(0, 5)}</div>
            </div>
            <div>
              <AIcon name="sunset" size="40" fill="#505565" />
              <div>{useConvertTime(sunset, 'time').slice(0, 5)}</div>
            </div>
          </div>
        </div>
        <div className="extra-info">
          <div className="extra-info__element">
            <div className="card-inner">
              <div className="card-front">
                <div className="extra-info__title">Feels like</div>
                <div className="extra-info__value">
                  <AIcon name="feels like" size="25" fill="#505565" />
                  {String(useConvertDegrees(feels_like)).slice(0, 2)}&#xb0;
                </div>
              </div>
              <div className="card-back">
                <div className="card-back__title">
                  {allWeather.daily[0].summary}
                </div>
              </div>
            </div>
          </div>
          <div className="extra-info__element">
            <div className="card-inner">
              <div className="card-front">
                <div className="extra-info__title">Wind direction</div>
                <div className="extra-info__value">
                  <AIcon name="compas" size="25" />
                  {wind_deg}
                </div>
              </div>
              <div className="card-back">
                <div>card back</div>
              </div>
            </div>
          </div>
          <div className="extra-info__element">
            <div className="card-inner">
              <div className="card-front">
                <div className="extra-info__title">Precipitation</div>
                <div className="extra-info__value">
                  <AIcon name="drop" size="25" />
                  {precipitation ? precipitation : '0'} mm
                </div>
              </div>
              <div className="card-back">
                <div>card back</div>
              </div>
            </div>
          </div>
        </div>
        <MSliderDay />
        <div className="weather-day__container-btn">
          <div className="weather-day__more-btn">
            <AButton to="/day">See More</AButton>
          </div>
        </div>
      </div>
    );
  }
  return <ALoader />;
};
