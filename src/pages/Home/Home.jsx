import {
  WeatherDay,
  WeatherWeek,
  WeatherLocation,
} from '../../entities/weather';
import './styles.scss';

function Home() {
  return (
    <div className="container home">
      <div className="home__header">
        <WeatherLocation />
      </div>
      <WeatherDay />
      <WeatherWeek />
    </div>
  );
}

export default Home;
