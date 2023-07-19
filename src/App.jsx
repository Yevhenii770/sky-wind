import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from './redux/weather/weather-operations';

const HomePage = lazy(() => import('./pages/Home/Home'));
const DayPage = lazy(() => import('./pages/Day/Day'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, []);

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/day" element={<DayPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
