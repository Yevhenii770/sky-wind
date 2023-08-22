import { useEffect, lazy } from 'react';
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
  currentCity
} from './redux/weather/weather-selectors';
import { ALoader } from './shared/components/UI/atoms/ALoader';
import { useGeolocated } from 'react-geolocated';
import { addCoords } from './redux/weather/weather-slice';

import { Layout } from './pages/Layout/Layout';
const HomePage = lazy(() => import('./pages/Home/Home'));
const DayPage = lazy(() => import('./pages/Day/Day'));

function App() {
  const dispatch = useDispatch();

  const weatherArray = useSelector(selectAllWeather);
  const cityNow = useSelector(currentCity);
  const isLoading = useSelector(selectWeatherLoading);
  const location = useSelector(userLocation);
  const selectedCity = useSelector(userElectCity);


  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  
  if (coords && location.length === 0 && coords.latitude) {
    dispatch(addCoords([coords.latitude, coords.longitude]));
  }

  useEffect(() => {
    if (selectedCity !== null) {
      
      dispatch(fetchWeatherByCity(selectedCity))
      dispatch(fetchCityByCoordinates([weatherArray.lat, weatherArray.lon]));

      console.log('1')
  
     
    } if (location.length !== 0 && selectedCity === null) {
      dispatch(fetchWeather([location[0], location[1]]));
      dispatch(fetchCityByCoordinates([location[0], location[1]]));
     console.log('2')
 

    } if (!location.length && !selectedCity) {
      dispatch(fetchWeather([0, 0]));
      dispatch(fetchCityByCoordinates([0, 0]));
    console.log('3')
    }

  }, [location, selectedCity]);
  
  
  return isLoading ? (
    <div>
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
