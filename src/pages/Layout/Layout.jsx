import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AIcon, AButton } from '@/shared/components/UI/atoms';
import { Logo } from '../../widgets/header/UI';
import { SearchCityForm } from '../../shared/components/UI/molecules';

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
        <div className="container">
          <div className="header">
            <div className="header__container">
              <div className="header__navbar">
                <div className="header__search-logo-container">
                  <Logo />
                  <div className="search-form">
                    <SearchCityForm />
                  </div>
                </div>
                <div className="navigations">
                  <AButton
                    className="navigations__link"
                    type="navigation"
                    to="/day"
                  >
                    Day
                  </AButton>

                  <AButton
                    className="navigations__link"
                    type="navigation"
                    to="/week"
                  >
                    Week
                  </AButton>
                </div>
              </div>
            </div>
          </div>
          <Suspense>
            <main className="main">
              <Outlet />
            </main>
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
