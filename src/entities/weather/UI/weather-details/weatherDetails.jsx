import { useSelector } from 'react-redux';
import { selectWeather } from '@/redux/weather/weather-selectors';
import { AIcon, ALoader } from '@/shared/components/UI/atoms';
import { MSliderDay } from '@/shared/components/UI/molecules/MSliderDay';
import { useConvertDegrees, useConvertTime } from '../../hooks';

import './styles.scss';

export const WeatherDetails = () => {
  const allWeather = useSelector(selectWeather);
  const weatherNow = allWeather?.current;

  const maxTempToday = String(
    useConvertDegrees(allWeather?.daily[0]?.temp?.max)
  ).slice(0, 2);
  const minTempToday = String(
    useConvertDegrees(allWeather?.daily[0]?.temp?.min)
  ).slice(0, 2);
  const currentTemp = String(useConvertDegrees(weatherNow.temp))?.slice(0, 2);
  const rain = allWeather.hourly[0].pop;
  const humidity = allWeather.current.humidity;
  const wind = Math.round(allWeather.current.wind_speed);
  const uv = allWeather.current.uvi;
  const cover = allWeather.current.clouds;
  const pressure = allWeather.current.pressure;
  const sunrise = useConvertTime(allWeather.current.sunrise, 'time').slice(
    0,
    4
  );
  const sunset = useConvertTime(allWeather.current.sunset, 'time').slice(0, 5);
  const visibility = allWeather.current.visibility;
  const windGust = allWeather?.current?.wind_gust;
  const feelsLike = useConvertDegrees(allWeather.current.feels_like);

  return allWeather ? (
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
          <div className="detail-info__options">{Math.round(rain * 100)} %</div>
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
        <div className="detail-info__box">
          <div className="detail-info__icon-box">
            <AIcon
              name="clouds cover"
              size="25"
              className="detail-info__box-icon"
            />
          </div>
          <div className="detail-info__title">Clouds cover</div>
          <div className="detail-info__options">{cover} %</div>
        </div>
        <div className="detail-info__box">
          <div className="detail-info__icon-box">
            <AIcon
              name="pressure"
              size="25"
              className="detail-info__box-icon"
            />
          </div>
          <div className="detail-info__title">Pressure</div>
          <div className="detail-info__options">{pressure} hPa</div>
        </div>
        <div className="detail-info__box">
          <div className="detail-info__icon-box">
            <AIcon name="sunrise" size="25" className="detail-info__box-icon" />
          </div>
          <div className="detail-info__title">Sunrise / Sunset</div>
          <div className="detail-info__options">
            {sunrise} / {sunset}
          </div>
        </div>
        <div className="detail-info__box">
          <div className="detail-info__icon-box">
            <AIcon
              name="visibility"
              size="25"
              className="detail-info__box-icon"
            />
          </div>
          <div className="detail-info__title">Visibility </div>
          <div className="detail-info__options">{visibility} m</div>
        </div>
        <div className="detail-info__box">
          <div className="detail-info__icon-box">
            <AIcon
              name="wind gust"
              size="25"
              className="detail-info__box-icon"
            />
          </div>
          <div className="detail-info__title">Wind gust</div>
          <div className="detail-info__options">
            {windGust ? windGust + ' m/s' : 'no gustes'}
          </div>
        </div>
        <div className="detail-info__box">
          <div className="detail-info__icon-box">
            <AIcon
              name="feels like"
              size="25"
              className="detail-info__box-icon"
            />
          </div>
          <div className="detail-info__title">Feels like</div>
          <div className="detail-info__options">
            {Math.round(feelsLike)}&#176;
          </div>
        </div>
      </div>
      <div className="hour-degrees">
        <MSliderDay />
      </div>
    </>
  ) : (
    <ALoader />
  );
};
