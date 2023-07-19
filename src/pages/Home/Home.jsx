import {
  WeatherDay,
  WeatherWeek,
  WeatherLocation,
} from '../../entities/weather';
import './styles.scss';

function Home() {
  return (
    <div className="container">
      <div className="weather-location__container">
        <WeatherLocation />
      </div>
      <WeatherDay />
      <WeatherWeek />
    </div>
  );
}

export default Home;
