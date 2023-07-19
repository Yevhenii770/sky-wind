import { NavLink } from 'react-router-dom';
import { WeatherLocation } from '../../entities/weather/UI/weather-location';
import { AIcon } from '../../shared/components/UI/atoms';
import './styles.scss';

export default function Day() {
  return (
    <div className="weather-day">
      <div className="weather-day__content">
        <div className="weather-day__container-title">
          <NavLink className="weather-day__btn-back" to="/">
            <AIcon name="leftArrow" fill="#fff" />
          </NavLink>
          <div className="weather-location__container">
            <WeatherLocation />
          </div>
        </div>
        <div className="weather-now">
          <div className="weather-now__container-icon">
            <AIcon className="weather-now__icon" name="cloud" size="120" />
          </div>
          <div>
            <div className="weather-now__big-celsius">12&#176;</div>
            <div className="weather-now__temperature-range">
              Cloudy, 16&#176; / 5&#176;
            </div>
          </div>
        </div>

        <div className="detail-info">
          <div className="detail-info__box">
            <div className="detail-info__icon-box">
              <AIcon
                name="rainSmal"
                size="20"
                className="detail-info__box-icon"
              />
            </div>
            <div className="detail-info__title">Rain</div>
            <div className="detail-info__options">4%</div>
          </div>
          <div className="detail-info__box">
            <div className="detail-info__icon-box">
              <AIcon
                className="detail-info__box-icon"
                name="dropHumidity"
                size="20"
              />
            </div>
            <div className="detail-info__title">Humidity</div>
            <div className="detail-info__options">64%</div>
          </div>
          <div className="detail-info__box">
            <div className="detail-info__icon-box">
              <AIcon className="detail-info__box-icon" name="windy" size="20" />
            </div>

            <div className="detail-info__title">Wind</div>
            <div className="detail-info__options">4 km/h</div>
          </div>
          <div className="detail-info__box">
            <div className="detail-info__icon-box">
              <AIcon className="detail-info__box-icon" name="uv" size="20" />
            </div>
            <div className="detail-info__title">UV index</div>
            <div className="detail-info__options">Low</div>
          </div>
        </div>
        <div className="hour-degrees">123</div>
      </div>
    </div>
  );
}
