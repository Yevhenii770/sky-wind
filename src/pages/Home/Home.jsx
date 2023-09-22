import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectWeather } from '@/redux/weather/weather-selectors';
import { WeatherDay, WeatherWeek, WeatherLocation } from '@/entities/weather';
import { SearchCityForm } from '../../shared/components/UI/molecules/SearchCityForm';
import { SearchForm } from '@/shared/components/UI/molecules';
import { AButton, AIcon, ALoader } from '../../shared/components/UI/atoms';
import Modal from '@/shared/components/UI/molecules/MModal';

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
    <div className="home">
      <>
        <div className="home__header">
          <WeatherLocation />
          <div className="home__desctop-search-btn">
            <SearchCityForm />
          </div>
          <div className="home__mobile-search-btn">
            <AButton svg="true" onClick={handleModalOpen}>
              <AIcon name="serach" size="35" />
            </AButton>
          </div>
        </div>

        <div className="home__main">
          <WeatherDay />
          <WeatherWeek />
        </div>
      </>

      <div>
        {isModalActive && (
          <Modal onClose={handleModalClose}>
            <SearchForm />
          </Modal>
        )}
      </div>
    </div>
  ) : (
    <ALoader />
  );
};

export default Home;
