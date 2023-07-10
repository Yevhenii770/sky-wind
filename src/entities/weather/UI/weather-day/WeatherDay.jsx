import { useState } from 'react';
import { WeatherDayModal } from '../weather-day-modal/WeatherDayModal';
import { AButton, AIcon } from '../../../../shared/components/UI/atoms';
import './styles.scss';

export const WeatherDay = () => {
  const [modalActive, setModalActive] = useState(false);
  // temp day
  const day = [
    {
      time: '11:00',
      id: 0,
      humidity: '4%',
      temp: '16',
      weatherSvg: 'cloud',
    },
    {
      time: '12:00',
      id: 1,
      humidity: '24%',
      temp: '18',
      weatherSvg: 'bigRain',
    },
    {
      time: '13:00',
      id: 2,
      humidity: '56%',
      temp: '12',
      weatherSvg: 'rain',
    },
    {
      time: '14:00',
      id: 4,
      humidity: '7%',
      temp: '22',
      weatherSvg: 'storm',
    },
    {
      time: '15:00',
      id: 5,
      humidity: '95%',
      temp: '10',
      weatherSvg: 'cloud',
    },
    {
      time: '16:00',
      id: 6,
      humidity: '45%',
      temp: '14',
      weatherSvg: 'wind',
    },
    {
      time: '17:00',
      id: 7,
      humidity: '35%',
      temp: '18',
      weatherSvg: 'cloud',
    },
    {
      time: '18:00',
      id: 8,
      humidity: '75%',
      temp: '9',
      weatherSvg: 'cloud',
    },
  ];

  return (
    <div className="weather-day">
      <div className="weather-day__container">
        <div className="weather-day-icon-now">
          <AIcon name="cloud" size="50" />
        </div>
        <div className="weather-day__temperature-now">12&#176;</div>
        <div className="weather-day__table">
          <div className="weather-day__info">
            <div className="weather-day__info-title">Rain</div>
            <div className="weather-day__info-title">Humidity</div>
            <div className="weather-day__info-title">Wind</div>
          </div>
          <div>
            <div className="weather-day__info-subtitle">4%</div>
            <div className="weather-day__info-subtitle">64%</div>
            <div className="weather-day__info-subtitle">4km/h</div>
          </div>
        </div>
      </div>

      <div className="weather-day__list">
        {day.map((el) => (
          <div key={el.id} className="weather-day__element">
            <div className="weather-day__element-title">{el.time}</div>
            <AIcon name={el.weatherSvg} size="30" />
            <div>{el.temp}&#176;</div>
            <div>
              <AIcon name="drop" />
              <br></br>
              {el.humidity}
            </div>
          </div>
        ))}
      </div>
      <AButton setActive={setModalActive} color="primary">
        See More
      </AButton>
      {modalActive && (
        <WeatherDayModal active={modalActive} setActive={setModalActive} />
      )}
    </div>
  );
};
