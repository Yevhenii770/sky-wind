import { useState } from 'react';
import { useSelector } from 'react-redux';
import { isBrowser } from 'react-device-detect';
import { selectWeather } from '../../redux/weather/weather-selectors';
import { WeatherLocation } from '@/entities/weather/UI/weather-location';
import { NavLink } from 'react-router-dom';
import { AIcon, AButton } from '../../shared/components/UI/atoms';
import { nanoid } from 'nanoid';
import {
  useConvertTime,
  useConvertDegrees,
} from '../../entities/weather/hooks';
import { ALoader } from '../../shared/components/UI/atoms';
import './styles.scss';

const Week = () => {
  const allWeather = useSelector(selectWeather);
  const dailyWeather = allWeather?.daily;
  const [isModalActive, setModalActive] = useState(false);

  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };

  return dailyWeather ? (
    <div className="page-week">
      <div className="page-week__content">
        <div className="page-week__header">
          <NavLink className="page-week__btn-left-back" to="/">
            <AIcon name="left" fill={isBrowser ? '#505565' : '#f7f9fc'} />
          </NavLink>

          <WeatherLocation />
        </div>

        <div className="page-week__container">
          {dailyWeather.map((el) => (
            <div key={nanoid()} className="page-week__card">
              <div className="page-week__card-title">
                {useConvertTime(el.dt, 'dayWeek')}
              </div>
              <div className="page-week__main-info-container">
                <div className="page-week__icon-box">
                  <AIcon
                    className="detail-info__box-icon"
                    name={el.weather[0].description}
                    size="90"
                  />
                </div>
                <div className="page-week__temp-container">
                  <div className="page-week__temp">
                    {String(useConvertDegrees(el.temp.max)).split('.')[0]}&#176;
                    / {String(useConvertDegrees(el.temp.min)).split('.')[0]}
                    &#176;
                  </div>{' '}
                </div>
              </div>
              <div className="page-week__details-container">
                <div className="page-week__weather-title">
                  <div className="page-week__element-title">Wind</div>
                  <div className="page-week__element-value">
                    {Math.round(el.wind_speed)} Km/h
                  </div>
                </div>
                <div className="page-week__weather-title">
                  <div className="page-week__element-title">Rain</div>
                  <div className="page-week__element-value">
                    {el.pop * 100} %
                  </div>
                </div>
                <div className="page-week__weather-title">
                  <div className="page-week__element-title">Humidity</div>
                  <div className="page-week__element-value">
                    {el.humidity} %
                  </div>
                </div>
                <div className="page-week__weather-title">
                  <div className="page-week__element-title">UI Index</div>
                  <div className="page-week__element-value">
                    {Math.round(el.uvi)}
                  </div>
                </div>
                <div className="page-week__weather-title">
                  <div className="page-week__element-title">Feels Like</div>
                  <div className="page-week__element-value">
                    {String(useConvertDegrees(el.feels_like.day)).split('.')[0]}
                    &#176;
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="page-week__btn-back">
          <AButton to="/" type="button">
            Go back
          </AButton>
        </div>
      </div>
    </div>
  ) : (
    <div className="page-week__loader">
      <ALoader />
    </div>
  );
};
export default Week;
