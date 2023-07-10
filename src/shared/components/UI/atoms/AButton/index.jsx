import './styles.scss';

export const AButton = ({ children, setActive }) => {
  return (
    <button className="a-button" type="button" onClick={setActive}>
      {children}
    </button>
  );
};
