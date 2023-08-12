import {
  WeatherDay,
  WeatherWeek,
  WeatherLocation,
} from '../../entities/weather';
import { AIcon } from '../../shared/components/UI/atoms';
import './styles.scss';

function Home() {
  return (
    <div className="home">
      <>
        <div className="home__header">
          <WeatherLocation />
          <AIcon name="dots" size="35" />
        </div>
        <WeatherDay />

        <WeatherWeek />
      </>
    </div>
  );
}

export default Home;
