import logo from './logo.svg';
import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import GridCard from './components/GridCard/GridCard';

function App() {
  return (
    <div className="App">
      <button>plain Button</button>
      <Button variant='danger'>My Button</Button>
      <Spinner animation="grow" variant="success" />
      <GridCard></GridCard>
    </div>
  );
}

export default App;
