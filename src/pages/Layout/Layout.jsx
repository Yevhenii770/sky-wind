import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './styles.scss';

export const Layout = () => {
  const location = useLocation();
  const dynamicStyleDay = location.pathname === '/day' ? 'day-special' : '';

  return (
    <div className={`container ${dynamicStyleDay}`}>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
