import React from 'react';
import { AButton, AIcon } from '../../../../shared/components/UI/atoms';
import './styles.scss';

export const WeatherDay = () => {
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
      <div className="weather-day__container">
        <div className="weather-day-icon-now">
          <AIcon name="cloud" />
        </div>
        <div className="weather-day__temperature-now">12&#176;</div>
        <div className="weather-day__info">
          <div className="weather-day__info-title">
            Rain <span className="weather-day__info-subtitle">4%</span>
          </div>
          <div className="weather-day__info-title">
            Humididti <span className="weather-day__info-subtitle">64%</span>
          </div>
          <div className="weather-day__info-title">
            Wind <span className="weather-day__info-subtitle">4km/h</span>
          </div>
        </div>
      </div>

      <div className="weather-day__list">
        {day.map((el) => (
          <div key={el.id} className="weather-day__element">
            <div className="weather-day__element-title">{el.time}</div>
            <AIcon name="cloud" />
            <div>{el.temp}&#176;</div>
            <div>
              <AIcon name="drop" />
              <br></br>
              {el.humidity}
            </div>
          </div>
        ))}
      </div>

      <AButton>See More</AButton>
    </div>
  );
};
