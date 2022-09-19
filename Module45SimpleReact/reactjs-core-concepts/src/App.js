import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
  { name: 'Dr. Mahfuz', job: 'singer' },
  { name: 'Eva Rahman', job: 'singer2' },
  { name: 'Agun', job: 'Sopno' },
  { name: 'Shuvrodev', job: 'Eomn' }
];
const singerStyle = {
  color: 'purple',
}
function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'Kuber', 'Montu'];
  // nayoks.map(nayok=>)
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>
        )
      }
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {
        singers.map(singer => <Person name={singer.name} nayika={singer.job}></Person>)
      }

      {/* <Person name={nayoks[0]} nayika="Moushumi"></Person>
      <Person name='BappaRaz' nayika="cheka"></Person>
      <Person name="kuber" nayika="Kopila"></Person>
      <Person name="Montu" nayika="Tuni"></Person> */}
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
