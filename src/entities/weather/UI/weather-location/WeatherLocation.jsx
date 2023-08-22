import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectAllWeather } from '../../../../redux/weather/weather-selectors';
import { currentCity } from '../../../../redux/weather/weather-selectors';
import { ALoader } from '../../../../shared/components/UI/atoms/ALoader';
import './styles.scss';

export const WeatherLocation = () => {
  const weatherArray = useSelector(selectAllWeather);
  const dataLocations = useSelector(currentCity);
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

//   useEffect(() => {
  
// },[dataLocations])

  return (
    <div className="weather-location">
      <div>
        <div className="title">
          {dataLocations ? dataLocations.name : <ALoader />},{' '}
          {dataLocations ? dataLocations.country : <ALoader />}
        </div>
        <div className="sub-title">
          {days[data.getDay()]} {timeNow},{' '}
          {weatherArray ? weatherArray.current.summary : <ALoader />}
        </div>
      </div>
    </div>
  );
};
