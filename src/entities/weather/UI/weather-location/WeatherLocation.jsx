import { useSelector } from 'react-redux';
import { selectAllWeather } from '../../../../redux/weather/weather-selectors';
import './styles.scss';

export const WeatherLocation = () => {
  const weatherArray = useSelector(selectAllWeather);
  // const arr = weatherArray;

  return (
    <div className="weather-location">
      <div>
        <div className="title">Florence, Italy </div>
        <div className="sub-title">Wednesday 11:00, Cloudy</div>
      </div>
      <div>
        <div>...</div>
      </div>
    </div>
  );
};
