import { Link } from 'react-router-dom';
import errorPhoto from '../../../public/partly-cloudy-night.png';
import { isMobile } from 'react-device-detect';
import './styles.scss';

export const NotFound = () => {
  return (
    <div className="page-not-found">
      <div className="page-not-found__container">
        <img src={errorPhoto} alt="404" width={isMobile ? 150 : 335} />
        <div className="error">
          <h1 className="error__title">404</h1>
          <h2 className="error__sub-title">Oops!</h2>
          <p className="error__text">
            Something went wrong. Looks like this page doesn’t exist anymore.{' '}
          </p>
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
};
