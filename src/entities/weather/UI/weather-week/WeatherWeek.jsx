import './styles.scss';
import {
  SeeMoreBtn,
  WeatherSvgSelector,
  WeatherHumiditySvgSelector,
} from '../../../../shared/components/UI/atoms';

export const WeatherWeek = () => {
  //temp data
  const day = [
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
      <ul className="weather-week-list">
        {day.map((el) => (
          <li key={el.id} className="weather-week-item">
            <p>{el.day}</p>

            <div className="weather-week-icon">
              <WeatherSvgSelector id="wheather" size="24" />
            </div>

            <div className="weather-week-humidity-icon">
              <WeatherHumiditySvgSelector id="humidity" />
            </div>

            <p className="weather-week-humidity">{el.humidity}</p>
            <p>{el.temp} &#176;</p>
          </li>
        ))}
      </ul>

      <SeeMoreBtn />
    </div>
  );
};
