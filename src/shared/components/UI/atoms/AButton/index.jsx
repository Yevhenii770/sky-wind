import './styles.scss';

export const AButton = ({ children }) => {
  return (
    <button className="a-button" type="button">
      {children}
    </button>
  );
};
