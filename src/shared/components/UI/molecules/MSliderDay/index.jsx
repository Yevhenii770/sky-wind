import { useSelector } from 'react-redux';
import { AIcon } from '../../atoms';
import { selectAllWeather } from '@/redux/weather/weather-selectors';
import { nanoid } from 'nanoid';
import './styles.scss';

export const MSliderDay = () => {
  const weatherArray = useSelector(selectAllWeather);
  const hourlyWeather = Object.values(weatherArray.hourly.data);

  return (
    <div className="slider-weather-day__list">
      {hourlyWeather.map((el) => (
        <div key={nanoid()} className="slider-weather-day__element">
          <div className="slider-weather-day__element-title">
            {el.date.slice(11, 16)}
          </div>
          <AIcon name={el.summary} size="40" />
          <div className="slider-weather-day__element-temp">
            {Math.round(el.temperature)}&#176;
          </div>
          <div className="slider-weather-day__icon-container">
            <AIcon
              name={el.cloud_cover.total < 50 ? 'cloud' : 'Many cloud'}
              size="15"
            />
            {el.cloud_cover.total + '%'}
          </div>
        </div>
      ))}
    </div>
  );
};
