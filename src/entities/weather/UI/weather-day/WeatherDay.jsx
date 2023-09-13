import { useSelector } from 'react-redux';
import { AButton, AIcon, ALoader } from '@/shared/components/UI/atoms';
import { selectWeather } from '@/redux/weather/weather-selectors.js';
import { MSliderDay } from '@/shared/components/UI/molecules/MSliderDay';
import { useConvertDegrees } from '../../hooks';

import './styles.scss';

export const WeatherDay = () => {
  const allWeather = useSelector(selectWeather);
  const tempNow = useConvertDegrees(allWeather?.current?.temp);

  if (allWeather && tempNow) {
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
            {String(tempNow).slice(0, 2)}&#xb0;
          </div>
          <div className="weather-day__table">
            <div className="weather-day__info">
              <div className="weather-day__info-title">Rain</div>
              <div className="weather-day__info-title">Humidity</div>
              <div className="weather-day__info-title">Wind</div>
            </div>
            <div className="weather-day__info">
              <div className="weather-day__info-subtitle">
                {allWeather.hourly[0].pop * 100} %
              </div>
              <div className="weather-day__info-subtitle">
                {allWeather.current.humidity} %
              </div>
              <div className="weather-day__info-subtitle">
                {Math.round(allWeather.current.wind_speed)} km/h
              </div>
            </div>
          </div>
        </div>
        <MSliderDay />
        <AButton to="/day">See More</AButton>
      </div>
    );
  }
  return <ALoader />;
};
