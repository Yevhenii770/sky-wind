import { useSelector } from 'react-redux';
import { selectAllWeather } from '../../../../redux/weather/weather-selectors';
import { AIcon } from '../../../../shared/components/UI/atoms';
import './styles.scss';

export const WeatherLocation = () => {
  const weatherArray = useSelector(selectAllWeather);
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const data = new Date();
  const hour = String(data.getHours());
  const minutes =
    String(data.getMinutes()) >= 10
      ? String(data.getMinutes())
      : '0' + String(data.getMinutes());
  const timeNow = hour + ':' + minutes;

  return (
    <div className="weather-location">
      <div>
        <div className="title">Florence, Italy </div>
        <div className="sub-title">
          {days[data.getDay()]} {timeNow}, {weatherArray.current.summary}
        </div>
      </div>
      <div>
        <AIcon name="dots" size="35" />
      </div>
    </div>
  );
};
