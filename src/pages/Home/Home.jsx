import {
  WeatherDay,
  WeatherWeek,
  WeatherLocation,
  useWeatherStore,
} from '../../entities/weather';
import './styles.scss';

function Home() {
  return (
    <div className="container">
      <WeatherLocation />
      <WeatherDay />
      <WeatherWeek />
    </div>
  );
}

export default Home;
