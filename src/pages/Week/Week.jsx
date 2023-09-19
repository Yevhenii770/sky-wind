import { useState } from 'react';
import { useSelector } from 'react-redux';
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
          <NavLink className="page-day__btn-back" to="/">
            <AIcon name="left" fill="#fff" />
          </NavLink>

          <WeatherLocation />

          <AButton svg="true" onClick={handleModalOpen}>
            <AIcon name="dots" fill="#fff" size="35" />
          </AButton>
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
                    {String(useConvertDegrees(el.temp.max)).slice(0, 2)}&#176; /{' '}
                    {String(useConvertDegrees(el.temp.min)).slice(0, 2)}&#176;
                  </div>{' '}
                  <div className="page-week__feels-like">
                    {'Feels like'}{' '}
                    {String(useConvertDegrees(el.feels_like.day)).slice(0, 2)}
                    &#176;
                  </div>
                </div>
              </div>
              <div className="page-week__details-container">
                <div className="page-week__weather-title">
                  <div className="page-week__element">Wind</div>{' '}
                  <div>{Math.round(el.wind_speed)} Km/h</div>
                </div>
                <div className="page-week__weather-title">
                  <div className="page-week__element">Rain</div>
                  <div>{el.pop * 100} %</div>
                </div>
                <div className="page-week__weather-title">
                  <div className="page-week__element">Humidity</div>
                  <div className="">{el.humidity} %</div>
                </div>
                <div className="page-week__weather-title">
                  <div className="page-week__element">UI Index</div>
                  <div>{Math.round(el.uvi)}</div>
                </div>
              </div>
            </div>
          ))}
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
