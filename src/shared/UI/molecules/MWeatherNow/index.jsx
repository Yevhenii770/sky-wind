import { useSelector } from 'react-redux';
import { selectWeather } from '@/redux/weather/weather-selectors';
import { AIcon } from '@/shared/UI/atoms';
import { useConvertDegrees } from '@/entities/weather/hooks';
import { ALoader } from '@/shared/UI/atoms';
import './styles.scss';

export const WeatherNow = () => {
  const allWeather = useSelector(selectWeather);

  const weatherNow = allWeather?.current;

  const maxTempToday = Math.round(
    useConvertDegrees(allWeather?.daily[0]?.temp?.max)
  );

  const minTempToday = Math.round(
    useConvertDegrees(allWeather?.daily[0]?.temp?.min)
  );

  const currentTemp = Math.round(useConvertDegrees(weatherNow?.temp));

  return minTempToday && maxTempToday && weatherNow && allWeather ? (
    <div className="weather-day__now">
      <div className="weather-day__container-icon">
        <AIcon name={weatherNow?.weather[0]?.description} size="120" />
      </div>
      <div>
        <div className="weather-day__big-celsius">{currentTemp}&#xb0;</div>
        <div>
          {weatherNow.weather[0].main}, {maxTempToday}
          &#176; / {minTempToday}&#176;
        </div>
      </div>
    </div>
  ) : (
    <ALoader />
  );
};
