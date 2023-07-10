import './styles.scss';

export const AButton = ({ children, setActive, color = 'primary' }) => {
  return (
    <button
      className={`a-button ${color ? `a-button--${color}` : ''}`}
      type="button"
      onClick={setActive}
    >
      {children}
    </button>
  );
};
