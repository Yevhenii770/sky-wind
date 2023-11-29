import { useSelector } from 'react-redux';
import { AButton, AIcon } from '@/shared/UI/atoms';
import { selectWeather } from '@/redux/weather/weather-selectors';
import { useConvertTime, useConvertDegrees } from '../../hooks';
import { isMobile } from 'react-device-detect';
import { nanoid } from 'nanoid';
import { ALoader } from '@/shared/UI/atoms';
import './styles.scss';

export const WeatherWeek = () => {
  const allWeather = useSelector(selectWeather);
  const weatherWeek = allWeather?.daily;

  return weatherWeek ? (
    <div className="weather-week">
      <div className="weather-week__list">
        {weatherWeek.map((el, index) => (
          <div key={nanoid()} className="weather-week__item">
            <div className="weather-week__title">
              {index === 0 ? 'Today' : useConvertTime(el.dt, 'dayWeek')}
            </div>
            <div className="weather-week__midle-group">
              <div className="weather-week__icon">
                <AIcon
                  name={el.weather[0].description}
                  size={isMobile ? 20 : 40}
                />
              </div>
              <div className="weather-week__cloud-cover-icon">
                <AIcon name="humiditi" size={isMobile ? 15 : 25} />
              </div>
              <div className="weather-week__humidity">{el.humidity} %</div>
            </div>
            <div className="weather-week__range">
              {String(useConvertDegrees(el.temp.max)).split('.')[0]}&#176; /{' '}
              {String(useConvertDegrees(el.temp.min)).split('.')[0]}&#176;
            </div>
          </div>
        ))}
      </div>

      <div className="weather-week__container-btn">
        <div className="weather-week__more-btn">
          <AButton to="/week" type="button">
            See more
          </AButton>
        </div>
      </div>
    </div>
  ) : (
    <ALoader />
  );
};
