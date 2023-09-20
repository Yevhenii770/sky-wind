import { useState } from 'react';
import { WeatherDay, WeatherWeek, WeatherLocation } from '@/entities/weather';
import { SearchCityForm } from '../../shared/components/UI/molecules/SearchCityForm';
import { SearchForm } from '@/shared/components/UI/molecules';
import { AButton, AIcon } from '../../shared/components/UI/atoms';
import Modal from '@/shared/components/UI/molecules/MModal';

import './styles.scss';

const Home = () => {
  const [isModalActive, setModalActive] = useState(false);

  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };

  return (
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
  );
};

export default Home;
