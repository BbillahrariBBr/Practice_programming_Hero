import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <h2 className='text-3xl font-bold'>Rest Countries</h2>
      <Countries></Countries>
    </div>
  );
}

function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div className='container'>

      {
        countries.map(country => <Country name={country.name.official} image={country.flags.png}
          population={country.population}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div className='country'>
      <h2 className='text-xl font-semibold text-blue-500'>{props.name}</h2>
      <img src={props.image} alt="" />
      <p>population: {props.population}</p>
    </div>
  )
}

export default App;
