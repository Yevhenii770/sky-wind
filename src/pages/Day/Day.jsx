import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { WeatherLocation } from '@/entities/weather/UI/weather-location';
import { WeatherDetails } from '@/entities/weather/UI/weather-details/weatherDetails';
import { AIcon, AButton } from '@/shared/UI/atoms';
import Modal from '@/shared/UI/molecules/MModal';
import { WeatherMap, WeatherNow } from '@/shared/UI/molecules';

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
      <div className="page-day__container">
        <div className="page-day__content">
          <div className="page-day__deg-location">
            <WeatherNow />
            <div className="page-day__current-weather-navigation">
              {isMobile && (
                <NavLink className="page-day__btn-left-back" to="/">
                  <AIcon name="left" fill={'#f7f9fc'} />
                </NavLink>
              )}
              <WeatherLocation />

              {isMobile && (
                <AButton svg="true" type="svg" onClick={handleModalOpen}>
                  <AIcon name="dots" fill={'#f7f9fc'} size="35" />
                </AButton>
              )}
            </div>
          </div>
        </div>
        <WeatherDetails />
        <div className="page-day__btn-back">
          <AButton to="/" type="button">
            Go back
          </AButton>
        </div>
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
