import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import './styles.scss';

export const Layout = () => {
  return (
    <div className="container">
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
