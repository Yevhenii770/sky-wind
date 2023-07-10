import { createPortal } from 'react-dom';
import { WeatherLocation } from '../weather-location';
import { AIcon } from '../../../../shared/components/UI/atoms';
import './styles.scss';

export const WeatherDayModal = ({ setActive }) => {
  return createPortal(
    <div className="weather-day-modal">
      <div className="weather-day-modal__content">
        <div className="weather-day-modal__container-title">
          <button
            className="weather-day-modal__close-btn"
            onClick={() => setActive(false)}
          >
            <AIcon name="leftArrow" fill="#fff" />
          </button>
          <WeatherLocation />
          <div>...</div>
        </div>
        <div className="weather-day-modal__container-weather-now">
          <AIcon className="icon" name="cloud" size="100" />
          <div>
            <div className="weather-day-modal__weather-now">12&#176;</div>
            <div>Cloudy, 16&#176; / 5&#176;</div>
          </div>
        </div>

        <div className="weather-day-modal__detail-info">
          <div className="weather-day-modal__detail-info-box">1</div>
          <div className="weather-day-modal__detail-info-box">2</div>
          <div className="weather-day-modal__detail-info-box">3</div>
          <div className="weather-day-modal__detail-info-box">4</div>
        </div>
        <div>123</div>
      </div>
    </div>,
    document.querySelector('body')
  );
};
