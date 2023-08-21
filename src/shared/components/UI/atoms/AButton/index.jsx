import { NavLink } from 'react-router-dom';
import './styles.scss';

export const AButton = ({
  children,
  onClick,
  color = 'primary',
  to,
  href,
  svg,
  type="button",
}) => {
  let Component = 'button';

  if (to) {
    Component = NavLink;
  }
  if (href) {
    Component = 'a';
  }

  return (
    <Component
      className={`a-button ${color ? `a-button--${color}` : ''} ${
        svg ? `a-button--svg` : ''
      }`}
      type={type}
      to={to}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};
