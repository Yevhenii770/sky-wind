import { useSelector } from 'react-redux';
import { AIcon } from '../../atoms';
import { selectWeather } from '@/redux/weather/weather-selectors';
import { nanoid } from 'nanoid';
import { useConvertTime, useConvertDegrees } from '@/entities/weather/hooks';
import './styles.scss';

export const MSliderDay = () => {
  const allWeather = useSelector(selectWeather);
  const hourlyWeather = allWeather?.hourly;
  const oneDayHourlyWeather = hourlyWeather?.slice(0, 24);
  console.log(oneDayHourlyWeather);
  return (
    <div className="slider-weather-day__list">
      {oneDayHourlyWeather.map((el) => (
        <div key={nanoid()} className="slider-weather-day__element">
          <div className="slider-weather-day__element-title">
            {useConvertTime(el.dt, 'time')}
          </div>
          <AIcon
            name={
              el?.weather[0]?.icon?.slice(2, 3) === 'd'
                ? el.weather[0]?.description
                : el.weather[0]?.description + 'Night'
            }
            size="40"
          />
          <div className="slider-weather-day__element-temp">
            {Math.round(String(useConvertDegrees(el.temp))?.split('.')[0])}
            &#176;
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
