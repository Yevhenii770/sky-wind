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
  userLocation,
} from './redux/weather/weather-selectors';
import { ALoader } from './shared/components/UI/atoms/ALoader';
import { useGeolocated } from 'react-geolocated';
import { addCoords } from './redux/weather/weather-slice';

import { Layout } from './pages/Layout/Layout';
const HomePage = lazy(() => import('./pages/Home/Home'));
const DayPage = lazy(() => import('./pages/Day/Day'));

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectWeatherLoading);
  const location = useSelector(userLocation);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  if (coords && location.length === 0) {
    dispatch(addCoords([coords.latitude, coords.longitude]));
  }

  console.log(coords, isGeolocationAvailable, isGeolocationEnabled);

  useEffect(() => {
    if (location.length !== 0) {
      dispatch(fetchWeather([location[0], location[1]]));
      dispatch(fetchCityByCoordinates([location[0], location[1]]));
    } else {
      dispatch(fetchWeather([0, 0]));
      dispatch(fetchCityByCoordinates([0, 0]));
    }
  }, [dispatch]);

  return isLoading ? (
    <ALoader />
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
