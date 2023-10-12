import { Link } from 'react-router-dom';
import './styles.scss';

const NotFound = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Page not found...</h1>
      <p>
        Maybe you want to go: <Link to="/">Home</Link>
      </p>
    </div>
  );
};
export default NotFound;
