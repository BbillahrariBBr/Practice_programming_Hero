import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = { name: 'Dr. Mahfuz', job: 'singer' };
const singerStyle = {
  color: 'purple',
}
function App() {
  return (
    <div className="App container">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </div>
  );
}
function Person() {
  return (
    <div className='person'>
      <h1>Shakib-Al-Hasan</h1>
      <p>profession: Cricketer</p>
    </div>
  )
}

export default App;
