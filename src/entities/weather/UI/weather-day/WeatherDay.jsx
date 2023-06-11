import { useEffect } from 'react';
import './styles.scss';
import { useWeatherStore } from '../../hooks/weather-store';
import {
  SeeMoreBtn,
  WeatherSvgSelector,
  WeatherHumiditySvgSelector,
} from '../../../../shared/components/UI/atoms';

export const WeatherDay = () => {
  const weatherStore = useWeatherStore();

  useEffect(() => {
    weatherStore.fetchWeather();
  }, []);

  // temp day
  const day = [
    {
      time: '11:00',
      id: 0,
      humidity: '4%',
      temp: '16',
    },
    {
      time: '12:00',
      id: 1,
      humidity: '24%',
      temp: '18',
    },
    {
      time: '13:00',
      id: 2,
      humidity: '56%',
      temp: '12',
    },
    {
      time: '14:00',
      id: 4,
      humidity: '7%',
      temp: '22',
    },
    {
      time: '15:00',
      id: 5,
      humidity: '95%',
      temp: '10',
    },
    {
      time: '16:00',
      id: 6,
      humidity: '45%',
      temp: '14',
    },
    {
      time: '17:00',
      id: 7,
      humidity: '35%',
      temp: '18',
    },
    {
      time: '18:00',
      id: 8,
      humidity: '75%',
      temp: '9',
    },
  ];

  return (
    <div className="weather-day">
      <div className="weather-day-card-container">
        <div className="weather-day-icon-now">
          <WeatherSvgSelector id="wheather" size="60" />
        </div>
        <h2 className="weather-day-temperature-now">12&#176;</h2>
        <ul className="day-temperature-options-list">
          <li className="temperature-now-options-title">
            Rain <span className="temperature-now-options">4%</span>
          </li>
          <li className="temperature-now-options-title">
            Humididti <span className="temperature-now-options">64%</span>
          </li>
          <li className="temperature-now-options-title">
            Wind <span className="temperature-now-options">4km/h</span>
          </li>
        </ul>
      </div>

      <ul className="weather-day-list">
        {day.map((el) => (
          <li key={el.id} className="weather-day-element">
            <p className="weather-day-element-title">{el.time}</p>
            <WeatherSvgSelector id="wheather" size="30" />
            <p>{el.temp}&#176;</p>
            <p>
              <WeatherHumiditySvgSelector id="humidity" />
              <br></br>
              {el.humidity}
            </p>
          </li>
        ))}
      </ul>

      <SeeMoreBtn />
    </div>
  );
};
