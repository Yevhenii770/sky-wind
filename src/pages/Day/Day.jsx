import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { WeatherLocation } from '@/entities/weather/UI/weather-location';
import { WeatherDetails } from '@/entities/weather/UI/weather-details/weatherDetails';
import { AIcon, AButton } from '@/shared/components/UI/atoms';
import Modal from '@/shared/components/UI/molecules/MModal';
import { WeatherMap } from '../../shared/components/UI/molecules';

import './styles.scss';

export default function Day() {
  const [isModalActive, setModalActive] = useState(false);

  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };

  return (
    <div className="page-day">
      <div className="page-day__content">
        <div className="page-day__container-title">
          <NavLink className="page-day__btn-back" to="/">
            <AIcon className="page-day__icon" name="left" fill="#fff" />
          </NavLink>

          <WeatherLocation />

          <AButton svg="true" onClick={handleModalOpen}>
            <AIcon name="dots" fill="#fff" size="35" />
          </AButton>
        </div>
        <WeatherDetails />
      </div>
      <div>
        {isModalActive && (
          <Modal bigSize={'true'} title="" onClose={handleModalClose}>
            <WeatherMap />
          </Modal>
        )}
      </div>
    </div>
  );
}
