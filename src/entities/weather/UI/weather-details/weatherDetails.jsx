import { useSelector } from 'react-redux';
import { selectAllWeather } from '../../../../redux/weather/weather-selectors';
import { AIcon } from '../../../../shared/components/UI/atoms';
import { MSliderDay } from '../../../../shared/components/UI/molecules/MSliderDay';
import { ALoader } from '../../../../shared/components/UI/atoms/ALoader';

import './styles.scss';

export const WeatherDetails = () => {
  const weatherArray = useSelector(selectAllWeather);
  const currentWeather = weatherArray.current;

  let temperatureToday = [];
  weatherArray.hourly.data.map((el) =>
    temperatureToday.push(Math.round(el.temperature))
  );

  return (
    <>
      <div className="weather-day__now">
        <div className="weather-day__container-icon">
          <AIcon name={currentWeather.summary} size="120" />
        </div>
        <div>
          <div className="weather-day__big-celsius">
            {Math.round(currentWeather.temperature)}&#xb0;
          </div>
          <div>
            {weatherArray ? weatherArray.current.summary : <ALoader />},{' '}
            {Math.max(...temperatureToday)}
            &#176; / {Math.min(...temperatureToday)}&#176;
          </div>
        </div>
      </div>
      <div className="detail-info">
        <div className="detail-info__box">
          <div className="detail-info__icon-box">
            <AIcon
              name="precipitation"
              size="25"
              className="detail-info__box-icon"
            />
          </div>
          <div className="detail-info__title">Precipitation</div>
          <div className="detail-info__options">
            {currentWeather.precipitation.total} mm
          </div>
        </div>
        <div className="detail-info__box">
          <div className="detail-info__icon-box">
            <AIcon
              className="detail-info__box-icon"
              name="cloud Cover"
              size="25"
            />
          </div>
          <div className="detail-info__title">Cloud cover</div>
          <div className="detail-info__options">
            {currentWeather.cloud_cover} %
          </div>
        </div>
        <div className="detail-info__box">
          <div className="detail-info__icon-box">
            <AIcon className="detail-info__box-icon" name="windy" size="25" />
          </div>

          <div className="detail-info__title">Wind</div>
          <div className="detail-info__options">
            {Math.round((currentWeather.wind.speed * 3600) / 1000)} km/h
          </div>
        </div>
        <div className="detail-info__box">
          <div className="detail-info__icon-box">
            <AIcon className="detail-info__box-icon" name="uv" size="20" />
          </div>
          <div className="detail-info__title">UV index</div>
          <div className="detail-info__options">Low</div>
        </div>
      </div>
      <div className="hour-degrees">
        <MSliderDay />
      </div>
    </>
  );
};
