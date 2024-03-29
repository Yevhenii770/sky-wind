import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectWeather } from '@/redux/weather/weather-selectors';
import { WeatherDay, WeatherWeek, WeatherLocation } from '@/entities/weather';
import { SearchForm } from '@/shared/UI/molecules';
import { AButton, AIcon, ALoader } from '../../shared/UI/atoms';
import Modal from '@/shared/UI/molecules/MModal';

import './styles.scss';

const Home = () => {
  const allWeather = useSelector(selectWeather);
  const [isModalActive, setModalActive] = useState(false);

  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };

  return allWeather ? (
    <>
      <div className="home">
        <div className="home__header">
          <WeatherLocation />
          <div className="home__mobile-search-btn">
            <AButton svg="true" onClick={handleModalOpen}>
              <AIcon name="search" size="35" />
            </AButton>
          </div>
        </div>

        <div className="home__main">
          <div className="home__content">
            <WeatherDay />
            <WeatherWeek />
          </div>
        </div>
      </div>

      <div>
        {isModalActive && (
          <Modal onClose={handleModalClose}>
            <SearchForm onClose={handleModalClose} />
          </Modal>
        )}
      </div>
    </>
  ) : (
    <div className="loader">
      <ALoader />
    </div>
  );
};

export default Home;
