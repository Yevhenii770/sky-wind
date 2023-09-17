import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './styles.scss';

const Layout = () => {
  const { pathname } = useLocation();
  const daySpecial =
    pathname === '/day' || pathname === '/week' ? 'background-wrapper' : '';
  const backgroundWrapper =
    pathname === '/day' || pathname === '/week' ? 'day-wrapper' : '';

  return (
    <div className={`${daySpecial}`}>
      <div className={`container ${backgroundWrapper}`}>
        <Suspense>
          <Outlet />
        </Suspense>
        <ToastContainer />
      </div>
    </div>
  );
};
export default Layout;
