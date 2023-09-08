import { useSelector } from 'react-redux';
import { AIcon } from '../../atoms';
import { selectWeather } from '@/redux/weather/weather-selectors';
import { nanoid } from 'nanoid';
import { useConvertTime } from '../../../../../entities/weather/hooks';

import './styles.scss';

export const MSliderDay = () => {
  const allWeather = useSelector(selectWeather);
  const hourlyWeather = allWeather?.hourly;

  return (
    <div className="slider-weather-day__list">
      {hourlyWeather.map((el) => (
        <div key={nanoid()} className="slider-weather-day__element">
          <div className="slider-weather-day__element-title">
            {useConvertTime(el.dt, 'time')}
          </div>
          <AIcon name={el.weather[0].description} size="40" />
          <div className="slider-weather-day__element-temp">
            {Math.round(String(el.temp).slice(0, 2))}&#176;
          </div>
          <div className="slider-weather-day__icon-container">
            <AIcon name="humiditi" size="15" />
            {el.humidity + '%'}
          </div>
        </div>
      ))}
    </div>
  );
};
