import { useEffect, lazy, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchWeather,
  fetchCityByCoordinates,
  fetchWeatherByCity,
} from './redux/weather/weather-operations';
import {
  selectWeatherLoading,
  userLocation,
  userElectCity,
  selectAllWeather,
} from './redux/weather/weather-selectors';
import { ALoader } from './shared/components/UI/atoms/ALoader';
import { useGeolocated } from 'react-geolocated';
import { addCoords } from './redux/weather/weather-slice';
import './styles.scss';

import Layout from './pages/Layout/Layout';

const HomePage = lazy(() => import('./pages/Home/Home'));
const DayPage = lazy(() => import('./pages/Day/Day'));

function App() {
  const dispatch = useDispatch();
  const notInitialRender = useRef(false);
  const weatherArray = useSelector(selectAllWeather);
  const isLoading = useSelector(selectWeatherLoading);
  const location = useSelector(userLocation);
  const selectedCity = useSelector(userElectCity);

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

  // only first render
  useEffect(() => {
    if (notInitialRender.current && selectedCity) {
      dispatch(fetchCityByCoordinates([weatherArray.lat, weatherArray.lon]));
    } else {
      notInitialRender.current = true;
    }
  }, [weatherArray]);

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
      dispatch(fetchWeatherByCity(selectedCity));
    }
  }, [selectedCity]);

  // if user give a geolocation
  useEffect(() => {
    if (location.length !== 0 && selectedCity === null) {
      dispatch(fetchWeather([location[0], location[1]]));
      dispatch(fetchCityByCoordinates([location[0], location[1]]));
    }
  }, [location]);

  return isLoading ? (
    <div className="app-loader-container">
      <ALoader />
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="day" element={<DayPage />} />
      </Route>
    </Routes>
  );
}

export default App;
