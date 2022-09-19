import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  return (

    <div className="App">
      <Counter></Counter>

    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  return (
    <div>
      <h1>COunt: {count} </h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>

    </div>
  )
}
/**
 * const products = [
    { name: "Laptop", price: 60000 },
    { name: "phone", price: 90000 },
    { name: "watch", price: 600 },
  ]

  {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }

 */
function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price} </p>
    </div>
  )
}

export default App;
