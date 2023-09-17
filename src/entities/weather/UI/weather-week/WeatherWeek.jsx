import { useSelector } from 'react-redux';
import { AButton, AIcon } from '@/shared/components/UI/atoms';
import { selectWeather } from '@/redux/weather/weather-selectors';
import { useConvertTime } from '../../hooks';
import { useConvertDegrees } from '../../hooks';
import { nanoid } from 'nanoid';
import { ALoader } from '@/shared/components/UI/atoms/ALoader';
import './styles.scss';

export const WeatherWeek = () => {
  const allWeather = useSelector(selectWeather);
  const weatherWeek = allWeather.daily;

  return (
    <div className="weather-week">
      <div className="weather-week__list">
        {weatherWeek ? (
          weatherWeek.map((el, index) => (
            <div key={nanoid()} className="weather-week__item">
              <div>
                {index === 0 ? 'Today' : useConvertTime(el.dt, 'dayWeek')}
              </div>
              <div className="weather-week__icon"></div>
              <div className="weather-week__cloud-cover-icon">
                <AIcon name="humiditi" size={15} />
              </div>
              <div className="weather-week__humidity">{el.humidity} %</div>
              <div>
                {String(useConvertDegrees(el.temp.max)).slice(0, 2)}&#176; /{' '}
                {String(useConvertDegrees(el.temp.min)).slice(0, 2)}&#176;
              </div>
            </div>
          ))
        ) : (
          <ALoader />
        )}
      </div>

      <AButton to="/week">See More</AButton>
    </div>
  );
};
