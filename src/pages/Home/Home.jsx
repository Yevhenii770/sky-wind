import { useState } from 'react';
import {
  WeatherDay,
  WeatherWeek,
  WeatherLocation,
} from '../../entities/weather';
import { AIcon } from '../../shared/components/UI/atoms';
import { AButton } from '../../shared/components/UI/atoms';
import Modal from '../../shared/components/UI/molecules/MModal';
import { SearchForm } from '../../shared/components/UI/molecules/MForm';

import './styles.scss';

function Home() {
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

          <AButton svg="true" onClick={handleModalOpen}>
            <AIcon name="dots" size="35" />
          </AButton>
        </div>
        <WeatherDay />
        <WeatherWeek />
      </>

      <div>
        {isModalActive && (
          <Modal title="Enter your city" onClose={handleModalClose}>
            <SearchForm />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Home;
