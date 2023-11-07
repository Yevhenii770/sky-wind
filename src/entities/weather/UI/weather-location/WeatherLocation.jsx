import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectWeather } from '@/redux/weather/weather-selectors';
import { currentCity } from '@/redux/weather/weather-selectors';
import {
  ALoader,
  ATime,
  ADate,
  AMonth,
  AYear,
} from '@/shared/components/UI/atoms';
import './styles.scss';
import { useEffect } from 'react';

export const WeatherLocation = () => {
  const allWeather = useSelector(selectWeather);
  const weatherNow = allWeather?.current?.weather[0]?.main;
  const dataLocations = useSelector(currentCity);
  const location = useLocation();

  useEffect(() => {}, [dataLocations.name, dataLocations.country, weatherNow]);

  return (
    <div className="weather-location">
      <div>
        <div className="title">
          {dataLocations ? dataLocations.name : ''},{' '}
          {dataLocations ? dataLocations.country : ''}
        </div>
        <div className="sub-title">
          {location.pathname !== '/week' ? (
            <>
              <ADate /> <ATime />, {weatherNow ? weatherNow : ''}
            </>
          ) : (
            <>
              <AMonth /> <AYear />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
