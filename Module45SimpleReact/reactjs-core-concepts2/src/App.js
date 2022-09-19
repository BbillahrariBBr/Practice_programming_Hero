import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: "Laptop", price: 60000 },
    { name: "phone", price: 90000 },
    { name: "watch", price: 600 },
  ]
  return (

    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }

    </div>
  );
}
function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price} </p>
    </div>
  )
}

export default App;
