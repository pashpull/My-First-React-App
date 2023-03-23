import Counter from '../Counter/Counter';
import './Main.css';

const Main = ({ idOfCount, del }) => {
  return (
    <div className="main">
      <div className="main__content">
        {idOfCount.length === 0 ? (
          <h1 className="main__text">Do you need a counter? Add it!</h1>
        ) : (
          idOfCount.map((randonNum) => (
            <Counter key={randonNum} id={randonNum} counterDel={del} />
          ))
        )}
      </div>
    </div>
  );
};

export default Main;
