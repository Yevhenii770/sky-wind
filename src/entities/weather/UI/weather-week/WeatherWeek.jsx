import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AButton, AIcon } from '@/shared/components/UI/atoms';
import { selectWeather } from '../../../../redux/weather/weather-selectors';
import { useConvertTime } from '../../hooks';
import { nanoid } from 'nanoid';

import Modal from '@/shared/components/UI/molecules/MModal';

import './styles.scss';

export const WeatherWeek = () => {
  const [isModalActive, setModalActive] = useState(false);
  const id = nanoid();
  const allWeather = useSelector(selectWeather);
  const weatherWeek = allWeather.daily;

  console.log(weatherWeek[0].humidity);
  console.log(weatherWeek[0].temp);
  console.log(useConvertTime(weatherWeek[0].dt, 'dayWeek'));
  console.log(weatherWeek[0].clouds);

  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };

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
        {weatherWeek.map((el) => (
          <div key={nanoid()} className="weather-week__item">
            <div>{useConvertTime(el.dt, 'dayWeek')}</div>

            <div className="weather-week__icon">
              {/* <AIcon name="Light rain" size="25" /> */}
            </div>

            <div className="weather-week__cloud-cover-icon">
              <AIcon name="humiditi" size={15} />
            </div>

            <div className="weather-week__humidity">{el.humidity} %</div>
            <div>
              {String(el.temp.max).slice(0, 2)} &#176; /{' '}
              {String(el.temp.night).slice(0, 2)} &#176;
            </div>
          </div>
        ))}

        <div className="weather-week__question-mark">
          <AButton svg="true" onClick={handleModalOpen}>
            {/* <AIcon size={35} name="Question mark" /> */}
          </AButton>
        </div>
        {isModalActive && (
          <Modal title="" onClose={handleModalClose}>
            {
              <div className="sorry-modal">
                <p className="sorry-modal__content">
                  Sorry, I dont have money to buy the full version of
                  weather-API So in weather week you see random data.
                </p>
              </div>
            }
          </Modal>
        )}
      </div>

      <AButton>See More</AButton>
    </div>
  );
};
