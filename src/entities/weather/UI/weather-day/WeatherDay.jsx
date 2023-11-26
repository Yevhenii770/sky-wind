import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AButton, AIcon, ALoader } from '@/shared/components/UI/atoms';
import { selectWeather } from '@/redux/weather/weather-selectors.js';
import { MSliderDay } from '@/shared/components/UI/molecules/MSliderDay';
import { useConvertDegrees, useConvertTime } from '../../hooks';

import './styles.scss';

export const WeatherDay = () => {
  const [precipitation, setPrecipitation] = useState(null);
  let sunrise, sunset, feelsLike, temp;

  const allWeather = useSelector(selectWeather);
  const currentWeather = allWeather.current;

  if (currentWeather) {
    sunrise = currentWeather.sunrise;
    sunset = currentWeather.sunset;
    feelsLike = currentWeather.feels_like;
    temp = currentWeather.temp;
  }

  useEffect(() => {
    if (currentWeather && currentWeather.rain !== undefined) {
      setPrecipitation(Object.values(currentWeather.rain));
    }
  }, []);

  if (allWeather && currentWeather) {
    return (
      <div className="weather-day">
        <div className="weather-day__container">
          <div className="weather-day__icon-temp-container">
            <div className="weather-day__icon">
              <AIcon name={currentWeather.weather[0].description} size="55" />
            </div>

            <div className="weather-day__temperature-now">
              {String(useConvertDegrees(temp)).split('.')[0]}&#xb0;
            </div>
          </div>
          <div className="weather-day__table">
            <div className="weather-day__info">
              <div className="weather-day__info-title">Rain</div>
              <div className="weather-day__info-title">Humidity</div>
              <div className="weather-day__info-title">Wind</div>
            </div>

            <div className="weather-day__info">
              <div className="weather-day__info-subtitle">
                {Math.round(allWeather?.hourly[0]?.pop * 100)} %
              </div>
              <div className="weather-day__info-subtitle">
                {currentWeather.humidity} %
              </div>
              <div className="weather-day__info-subtitle">
                {Math.round(currentWeather.wind_speed)} km/h
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
                  {String(useConvertDegrees(feelsLike)).split('.')[0]}&#xb0;
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
                <div className="extra-info__title">Rain</div>
                <div className="extra-info__value">
                  {Math.round(allWeather?.hourly[0]?.pop * 100)}%
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
                <div className="extra-info__title">Humidity</div>
                <div className="extra-info__value">
                  {currentWeather.humidity}%
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
                <div className="extra-info__title">Wind</div>
                <div className="extra-info__value">
                  {Math.round(currentWeather.wind_speed)} km/h
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
            <AButton to="/day" type="button">
              See more
            </AButton>
          </div>
        </div>
      </div>
    );
  }
  return <ALoader />;
};
