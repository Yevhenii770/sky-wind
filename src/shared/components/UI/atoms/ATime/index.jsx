import moment from 'moment-timezone';
import { useSelector } from 'react-redux';
import { selectWeather } from '@/redux/weather/weather-selectors';

export const ATime = () => {
  const allWeather = useSelector(selectWeather);
  const currentTime = moment().tz(allWeather?.timezone);
  const timeStr = currentTime?.format('HH:mm');

  return <>{timeStr}</>;
};
