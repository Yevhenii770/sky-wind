import { useEffect } from 'react';
// import { useWeatherStore } from './entities/weather';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { weatherApi } from './redux/weather/weather-operations';

const HomePage = lazy(() => import('./pages/Home/Home'));
const DayPage = lazy(() => import('./pages/Day/Day'));

function App() {
  useEffect(() => {
    // weatherApi();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/day" element={<DayPage />} />
    </Routes>
  );
}

export default App;
