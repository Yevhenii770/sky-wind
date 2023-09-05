import { useState } from 'react';
import { AButton, AIcon } from '@/shared/components/UI/atoms';
import Modal from '@/shared/components/UI/molecules/MModal';
import './styles.scss';

export const WeatherWeek = () => {
  const [isModalActive, setModalActive] = useState(false);

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
        {fakeData.map((el) => (
          <div key={el.id} className="weather-week__item">
            <div>{el.day}</div>

            <div className="weather-week__icon">
              {/* <AIcon name="Light rain" size="25" /> */}
            </div>

            <div className="weather-week__cloud-cover-icon">
              {/* <AIcon name="cloud" size={15} /> */}
            </div>

            <div className="weather-week__humidity">{el.humidity}</div>
            <div>{el.temp} &#176;</div>
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
