import { useSelector } from 'react-redux';
import { AButton, AIcon } from '@/shared/components/UI/atoms';
import { selectAllWeather } from '@/redux/weather/weather-selectors';

import './styles.scss';

export const WeatherWeek = () => {
  const weatherArray = useSelector(selectAllWeather);

  const fakeData = [
    {
      day: 'Today',
      id: 0,
      humidity: '4%',
      temp: '16 / 4',
    },
    {
      day: 'Thursday',
      id: 1,
      humidity: '24%',
      temp: '18 / 7',
    },
    {
      day: 'Friday',
      id: 2,
      humidity: '56%',
      temp: '12 / 2',
    },
    {
      day: 'Saturday',
      id: 3,
      humidity: '5%',
      temp: '14 / 9',
    },
  ];

  return (
    <div className="weather-week">
      <div className="weather-week__list">
        {fakeData.map((el) => (
          <div key={el.id} className="weather-week__item">
            <div>{el.day}</div>

            <div className="weather-week__icon">
              <AIcon name="Light rain" size="25" />
            </div>

            <div className="weather-week__humidity-icon">
              <AIcon name="drop" size={15} />
            </div>

            <div className="weather-week__humidity">{el.humidity}</div>
            <div>{el.temp} &#176;</div>
          </div>
        ))}
        {!weatherArray.daily
          ? 'Sorry, I dont have money to buy the full version of weather-API :( So in weather week you see random data. '
          : ''}
      </div>

      <AButton>See More</AButton>
    </div>
  );
};
