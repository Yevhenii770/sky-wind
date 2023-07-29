import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchWeather,
  fetchCityByCoordinates,
} from './redux/weather/weather-operations';
import {
  selectWeatherLoading,
  currentCity,
} from './redux/weather/weather-selectors';
import { addCoords } from './redux/weather/weather-slice';

const Layout = lazy(() => import('./pages/Layout/Layout'));
const HomePage = lazy(() => import('./pages/Home/Home'));
const DayPage = lazy(() => import('./pages/Day/Day'));

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectWeatherLoading);
  const city = useSelector(currentCity);

  function success({ coords }) {
    dispatch(addCoords([coords.latitude, coords.longitude]));
    console.log(coords.latitude, coords.longitude);
    dispatch(fetchCityByCoordinates(coords.latitude, coords.longitude));
  }
  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(function (result) {
          if (result.state === 'granted') {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === 'prompt') {
          } else if (result.state === 'denied') {
          }
        });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
    dispatch(fetchWeather());
  }, []);

  return (
    !isLoading && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="day" element={<DayPage />} />
        </Route>
      </Routes>
    )
  );
}

export default App;
