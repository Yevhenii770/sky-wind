import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCityByCoordinates,
  fetchCity,
  fetchWeather,
  fetchWeatherMap,
} from './redux/weather/weather-operations';
import {
  selectWeatherLoading,
  userLocation,
  userElectCity,
  selectWeather,
} from './redux/weather/weather-selectors';
import { useGeolocated } from 'react-geolocated';
import { addCoords } from './redux/weather/weather-slice';
import './styles.scss';

import { Layout } from './pages/Layout';
import { NotFound } from './pages/NotFound';
const HomePage = lazy(() => import('./pages/Home/Home'));
const DayPage = lazy(() => import('./pages/Day/Day'));
const WeekPage = lazy(() => import('./pages/Week/Week'));

function App() {
  const dispatch = useDispatch();

  const weatherArray = useSelector(selectWeather);
  const location = useSelector(userLocation);
  const selectedCity = useSelector(userElectCity);

  useEffect(() => {}, []);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 3000,
    });

  if (coords && location.length === 0 && coords.latitude) {
    dispatch(addCoords([coords.latitude, coords.longitude]));
  }

  // if we dont have any data
  useEffect(() => {
    if (!location.length && !selectedCity) {
      dispatch(fetchWeather([49.8383, 24.0232]));
      dispatch(fetchCityByCoordinates([49.8383, 24.0232]));
    }
  }, []);

  // if user selected city
  useEffect(() => {
    if (selectedCity !== null) {
      dispatch(fetchCity(selectedCity));
    }
  }, [selectedCity]);

  useEffect(() => {
    if (location[0] && location[1]) {
      dispatch(fetchWeather([location[0], location[1]]));
    }
  }, [location]);

  // if lat or lon changed
  useEffect(() => {
    if (weatherArray.lat && weatherArray.lon) {
      dispatch(fetchCityByCoordinates([weatherArray.lat, weatherArray.lon]));
    }
  }, [weatherArray.lat, weatherArray.lon]);

  // if user give a geolocation
  useEffect(() => {
    if (location.length !== 0 && selectedCity === null) {
      dispatch(fetchWeather([location[0], location[1]]));
      dispatch(fetchCityByCoordinates([location[0], location[1]]));
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="day" element={<DayPage />} />
        <Route path="week" element={<WeekPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
