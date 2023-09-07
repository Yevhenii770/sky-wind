import { useSelector } from 'react-redux';
import { AIcon } from '../../atoms';
import { selectWeather } from '@/redux/weather/weather-selectors';
import { nanoid } from 'nanoid';
import './styles.scss';

export const MSliderDay = () => {
  const allWeather = useSelector(selectWeather);
  const hourlyWeather = allWeather.hourly;

  const convertTime = (number) => {
    const date = new Date(number * 1000);
    return `${date.getHours()}:${date.getMinutes()}0`;
  };
  console.log(hourlyWeather[0].weather);

  return (
    <div className="slider-weather-day__list">
      {hourlyWeather.map((el) => (
        <div key={nanoid()} className="slider-weather-day__element">
          <div className="slider-weather-day__element-title">
            {convertTime(el.dt)}
          </div>
          {/* <AIcon name={el.summary} size="40" /> */}
          <div className="slider-weather-day__element-temp">
            {Math.round(String(el.temp).slice(0, 2))}&#176;
          </div>
          <div className="slider-weather-day__icon-container">
            {/* <AIcon
              name={el.cloud_cover.total < 50 ? 'cloud' : 'Many cloud'}
              size="15"
            /> */}
            {el.humidity + '%'}
          </div>
        </div>
      ))}
    </div>
  );
};
