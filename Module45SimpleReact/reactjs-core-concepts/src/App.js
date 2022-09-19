import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = { name: 'Dr. Mahfuz', job: 'singer' };
const singerStyle = {
  color: 'purple',
}
function App() {
  return (
    <div className="App">
      <Person name="Rubel" nayika="Moushumi"></Person>
      <Person name='BappaRaz' nayika="cheka"></Person>
      <Person name="kuber" nayika="Kopila"></Person>
      <Person name="Montu" nayika="Tuni"></Person>
    </div>
  );
}
function Person(props) {
  // console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  )
}

export default App;
