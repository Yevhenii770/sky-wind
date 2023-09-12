import { useSelector } from 'react-redux';
import { selectWeather } from '@/redux/weather/weather-selectors';
import { AIcon } from '@/shared/components/UI/atoms';
import { MSliderDay } from '@/shared/components/UI/molecules/MSliderDay';
import { useConvertDegrees } from '../../hooks';
import './styles.scss';

export const WeatherDetails = () => {
  const allWeather = useSelector(selectWeather);
  const weatherNow = allWeather?.current;

  const maxTempToday = String(
    useConvertDegrees(allWeather.daily[0].temp.max)
  ).slice(0, 2);
  const minTempToday = String(
    useConvertDegrees(allWeather.daily[0].temp.min)
  ).slice(0, 2);
  const currentTemp = String(useConvertDegrees(weatherNow.temp))?.slice(0, 2);
  const rain = allWeather.hourly[0].pop;
  const humidity = allWeather.current.humidity;
  const wind = Math.round(allWeather.current.wind_speed);
  const uv = allWeather.current.uvi;

  return (
    <>
      <div className="weather-day__now">
        <div className="weather-day__container-icon">
          <AIcon name={weatherNow.weather[0].description} size="120" />
        </div>
        <div>
          <div className="weather-day__big-celsius">{currentTemp}&#xb0;</div>
          <div>
            {weatherNow.weather[0].main}, {maxTempToday}
            &#176; / {minTempToday}&#176;
          </div>
        </div>
      </div>
      <div className="detail-info">
        <div className="detail-info__box">
          <div className="detail-info__icon-box">
            <AIcon name="drops" size="25" className="detail-info__box-icon" />
          </div>
          <div className="detail-info__title">Rain</div>
          <div className="detail-info__options">{rain * 100} %</div>
        </div>
        <div className="detail-info__box">
          <div className="detail-info__icon-box">
            <AIcon
              className="detail-info__box-icon"
              name="precipitation"
              size="25"
            />
          </div>
          <div className="detail-info__title">Humidity</div>
          <div className="detail-info__options">{humidity} %</div>
        </div>
        <div className="detail-info__box">
          <div className="detail-info__icon-box">
            <AIcon className="detail-info__box-icon" name="windy" size="25" />
          </div>

          <div className="detail-info__title">Wind</div>
          <div className="detail-info__options">{wind} km/h</div>
        </div>
        <div className="detail-info__box">
          <div className="detail-info__icon-box">
            <AIcon className="detail-info__box-icon" name="uv" size="20" />
          </div>
          <div className="detail-info__title">UV index</div>
          <div className="detail-info__options">{uv}</div>
        </div>
      </div>
      <div className="hour-degrees">
        <MSliderDay />
      </div>
    </>
  );
};
