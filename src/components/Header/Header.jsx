import './Header.css';

const Header = ({ add, delAll }) => {
  return (
    <div className="header">
      <div className="header__nav">
        <h1 className="header__title">My First React App</h1>
        <button className="header__btn" onClick={add}>
          Add counter
        </button>
        <button className="header__btn" onClick={delAll}>
          Delete all counters
        </button>
      </div>
    </div>
  );
};

export default Header;
