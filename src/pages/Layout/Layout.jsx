import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './styles.scss';

const Layout = () => {
  const { pathname } = useLocation();
  const daySpecial = pathname === '/day' ? 'day-special' : '';
  const dayWrapper = pathname === '/day' ? 'day-wrapper' : '';

  return (
    <div className={`${daySpecial}`}>
      <div className={`container ${dayWrapper}`}>
        <Suspense>
          <Outlet />
        </Suspense>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};
export default Layout;
