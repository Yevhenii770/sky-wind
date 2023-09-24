import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AIcon } from '@/shared/components/UI/atoms';
import './styles.scss';

const Layout = () => {
  const { pathname } = useLocation();
  const backgroundImage =
    pathname === '/day' || pathname === '/week' ? 'background-image' : '';
  const colorFill =
    pathname === '/day' || pathname === '/week' ? 'color-fill' : '';

  return (
    <div className={`${backgroundImage}`}>
      <div className={`${colorFill}`}>
        <div className={`container`}>
          <div className="header">
            <div className="header__container">
              <div className="header__navbar">
                <div className="header__logo">
                  <NavLink className="header__logo-link" to="/">
                    <div className="header__logo-container">
                      <AIcon name="clear sky" size={60} />
                    </div>
                    <div className="header__logo-title">Sky Wind</div>
                  </NavLink>
                </div>

                <div className="navigations">
                  <NavLink className="navigations__link" to="/day">
                    Day
                  </NavLink>
                  <div className="navigations__slash">/</div>
                  <NavLink className="navigations__link" to="/week">
                    Week
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <Suspense>
            <Outlet />
          </Suspense>
          <ToastContainer />
          <div className="footer">
            <div className="footer__container">
              <div className="footer__copyright">&#169; 2023</div>
              <div className="contactbar">
                <NavLink
                  className="contactbar__link"
                  to="https://github.com/Yevhenii770"
                  target="_blank"
                >
                  <AIcon name="github" />
                  <div>GitHub</div>
                </NavLink>
                <NavLink
                  className="contactbar__link"
                  to="https://www.linkedin.com/in/yevhenii-sitolenko/"
                  target="_blank"
                >
                  <AIcon name="linkedin" />
                  <div>LinkedIn</div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
