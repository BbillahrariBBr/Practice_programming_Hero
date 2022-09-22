import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  return (
    <div className="App">
      <Country></Country>
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCOuntries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCOuntries(data))
//   }, [])
//   return (
//     <div>
//       <h2>Available Countries {countries.length}</h2>
//     </div>
//   )
// }

export default App;
