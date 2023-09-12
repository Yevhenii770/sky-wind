import { useSelector } from 'react-redux';
import { AButton, AIcon } from '@/shared/components/UI/atoms';
import { selectWeather } from '@/redux/weather/weather-selectors.js';
import { MSliderDay } from '@/shared/components/UI/molecules/MSliderDay';
import { useConvertDegrees } from '../../hooks';

import './styles.scss';

export const WeatherDay = () => {
  const allWeather = useSelector(selectWeather);
  const tempNow = useConvertDegrees(allWeather?.current?.temp);

  const rainNow = allWeather?.hourly[0].pop;

  const humidityNow = allWeather?.current?.humidity;
  const windNow = allWeather?.current?.wind_speed;

  return (
    <div className="weather-day">
      <div className="weather-day__container">
        <div className="weather-day__icon">
          <AIcon
            name={allWeather?.current?.weather[0]?.description}
            size="55"
          />
        </div>

        <div className="weather-day__temperature-now">
          {String(tempNow)?.slice(0, 2)}&#xb0;
        </div>
        <div className="weather-day__table">
          <div className="weather-day__info">
            <div className="weather-day__info-title">Rain</div>
            <div className="weather-day__info-title">Humidity</div>
            <div className="weather-day__info-title">Wind</div>
          </div>
          <div className="weather-day__info">
            <div className="weather-day__info-subtitle">{rainNow * 100} %</div>
            <div className="weather-day__info-subtitle">{humidityNow} %</div>
            <div className="weather-day__info-subtitle">
              {Math.round(windNow)} km/h
            </div>
          </div>
        </div>
      </div>
      <MSliderDay />
      <AButton to="/day">See More</AButton>
    </div>
  );
};
