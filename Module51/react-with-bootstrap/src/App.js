import logo from './logo.svg';
import './App.css';
import CardsGroup from './components/CardsGroup/CardsGroup';

function App() {
  return (
    <div className="App">
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <CardsGroup></CardsGroup>

    </div>
  );
}

export default App;
