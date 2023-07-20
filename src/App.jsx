import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './redux/weather/weather-operations';
import { selectWeatherLoading } from './redux/weather/weather-selectors';

const Layout = lazy(() => import('./pages/Layout/Layout'));
const HomePage = lazy(() => import('./pages/Home/Home'));
const DayPage = lazy(() => import('./pages/Day/Day'));

function App() {
  const isLoading = useSelector(selectWeatherLoading);
  const dispatch = useDispatch();

  useEffect(() => {
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
