import './styles.scss';
import { AButton, AIcon } from '../../../../shared/components/UI/atoms';

export const WeatherWeek = () => {
  //temp data
  const week = [
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
        {week.map((el) => (
          <div key={el.id} className="weather-week__item">
            <div>{el.day}</div>

            <div className="weather-week__icon">
              <AIcon name="cloud" size="25" />
            </div>

            <div className="weather-week__humidity-icon">
              <AIcon name="drop" />
            </div>

            <div className="weather-week__humidity">{el.humidity}</div>
            <div>{el.temp} &#176;</div>
          </div>
        ))}
      </div>

      <AButton>See More</AButton>
    </div>
  );
};
