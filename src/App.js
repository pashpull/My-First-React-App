import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './styles/App.css';

function App() {
  const [idOfCount, setIdOfCount] = useState([]);

  const addCount = (e) => {
    setIdOfCount([...idOfCount, Math.random()]);
  };

  const delCount = (e) => {
    setIdOfCount(
      idOfCount.filter((item) => item !== +e.target.closest('.counter').id)
    );
  };

  const delAllCounts = () => {
    setIdOfCount([]);
  };

  return (
    <div className="App">
      <Header add={addCount} delAll={delAllCounts} />
      <Main idOfCount={idOfCount} del={delCount} />
      <Footer />
    </div>
  );
}

export default App;
