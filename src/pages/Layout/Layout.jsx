import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './styles.scss';

export const Layout = () => {
  const { pathname } = useLocation();
  const daySpecial = pathname === '/day' ? 'day-special' : '';
  const dayWrapper = pathname === '/day' ? 'day-wrapper' : '';

  return (
    <div className={`${daySpecial}`}>
      <div className={`container ${dayWrapper}`}>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
