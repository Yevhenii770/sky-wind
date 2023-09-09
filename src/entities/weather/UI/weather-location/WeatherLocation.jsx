import moment from 'moment-timezone';
import { useSelector } from 'react-redux';
import { selectWeather } from '@/redux/weather/weather-selectors';
import { currentCity } from '@/redux/weather/weather-selectors';
import { ALoader } from '@/shared/components/UI/atoms/ALoader';
import './styles.scss';

export const WeatherLocation = () => {
  const allWeather = useSelector(selectWeather);
  const weatherNow = allWeather?.current?.weather[0]?.main;
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
  const currentTime = moment().tz(allWeather?.timezone);
  const timeStr = currentTime?.format('HH:mm');

  return (
    <div className="weather-location">
      <div>
        <div className="title">
          {dataLocations ? dataLocations.name : <ALoader />},{' '}
          {dataLocations ? dataLocations.country : <ALoader />}
        </div>
        <div className="sub-title">
          {days[data.getDay()]} {timeStr},{' '}
          {weatherNow ? weatherNow : <ALoader />}
        </div>
      </div>
    </div>
  );
};
