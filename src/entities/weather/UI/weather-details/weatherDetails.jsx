import { AIcon } from '../../../../shared/components/UI/atoms';
import './styles.scss';

export const WeatherDetails = () => {
  return (
    <>
      <div className="weather-day__now">
        <div className="weather-day__container-icon">
          <AIcon name="cloudy" size="120" />
        </div>
        <div>
          <div className="weather-day__big-celsius">12&#176;</div>
          <div>Cloudy, 16&#176; / 5&#176;</div>
        </div>
      </div>
      <div className="detail-info">
        <div className="detail-info__box">
          <div className="detail-info__icon-box">
            <AIcon name="rain" size="20" className="detail-info__box-icon" />
          </div>
          <div className="detail-info__title">Rain</div>
          <div className="detail-info__options">4%</div>
        </div>
        <div className="detail-info__box">
          <div className="detail-info__icon-box">
            <AIcon
              className="detail-info__box-icon"
              name="drop Humidity"
              size="20"
            />
          </div>
          <div className="detail-info__title">Humidity</div>
          <div className="detail-info__options">64%</div>
        </div>
        <div className="detail-info__box">
          <div className="detail-info__icon-box">
            <AIcon className="detail-info__box-icon" name="windy" size="20" />
          </div>

          <div className="detail-info__title">Wind</div>
          <div className="detail-info__options">4 km/h</div>
        </div>
        <div className="detail-info__box">
          <div className="detail-info__icon-box">
            <AIcon className="detail-info__box-icon" name="uv" size="20" />
          </div>
          <div className="detail-info__title">UV index</div>
          <div className="detail-info__options">Low</div>
        </div>
      </div>
      <div className="hour-degrees">123</div>
    </>
  );
};
