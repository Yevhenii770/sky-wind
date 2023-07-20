import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import './styles.scss';

export default function Layout() {
  return (
    <div className="container">
      <Suspense fallback={<div>Loader...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
