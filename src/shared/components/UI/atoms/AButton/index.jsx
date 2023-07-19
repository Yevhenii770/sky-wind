import { NavLink } from 'react-router-dom';
import './styles.scss';

export const AButton = ({ children, onClick, color = 'primary', to, href }) => {
  let Component = 'button';

  if (to) {
    Component = NavLink;
  } else if (href) {
    Component = 'a';
  }

  return (
    <Component
      className={`a-button ${color ? `a-button--${color}` : ''}`}
      type="button"
      to={to}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};
