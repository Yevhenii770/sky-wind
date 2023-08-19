import { NavLink } from 'react-router-dom';
import { WeatherLocation } from '../../entities/weather/UI/weather-location';
import { WeatherDetails } from '../../entities/weather/UI/weather-details/weatherDetails';
import { AIcon } from '../../shared/components/UI/atoms';
import './styles.scss';

export default function Day() {
  return (
    <div className="page-day">
      <div className="page-day__content">
        <div className="page-day__container-title">
          <NavLink className="page-day__btn-back" to="/">
            <AIcon name="left" fill="#fff" />
          </NavLink>

          <WeatherLocation />

          <AIcon name="dots" size="35" fill="#fff" />
        </div>
        <WeatherDetails />
      </div>
    </div>
  );
}
