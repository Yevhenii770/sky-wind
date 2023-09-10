import { useSelector } from 'react-redux';
import { selectWeather } from '@/redux/weather/weather-selectors';
import { currentCity } from '@/redux/weather/weather-selectors';
import { ALoader, ATime, ADate } from '@/shared/components/UI/atoms';
import './styles.scss';
import { useEffect } from 'react';

export const WeatherLocation = () => {
  const allWeather = useSelector(selectWeather);
  const weatherNow = allWeather?.current?.weather[0]?.main;
  const dataLocations = useSelector(currentCity);

  useEffect(() => {}, [dataLocations.name, dataLocations.country, weatherNow]);

  return (
    <div className="weather-location">
      <div>
        <div className="title">
          {dataLocations ? dataLocations.name : <ALoader />},{' '}
          {dataLocations ? dataLocations.country : <ALoader />}
        </div>
        <div className="sub-title">
          <ADate /> <ATime />, {weatherNow ? weatherNow : <ALoader />}
        </div>
      </div>
    </div>
  );
};
