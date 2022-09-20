
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const persons = [
    { name: 'Sakib-Al-Hasan', profession: 'Cricketer' },
    { name: 'Mashrafi-Bin-Mortuza', profession: 'Minister of Parlament' },
    { name: 'Tahsan Khan', profession: 'Singer' },
    { name: 'Shams-Al-Karim', profession: 'Lecturer' }
  ]
  return (
    <div className="App">
      {/* {
        persons.map(person => {
          return <Person name={person.name} profession={person.profession}></Person>;
        })
      }
      <Counter></Counter> */}
      <ExternalUser></ExternalUser>
    </div>
  );
}

function ExternalUser() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setusers(data))
  }, [])
  return (
    <div className='container'>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props) {
  return (
    <div className='person'>
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}

function Counter() {
  const [count, setount] = useState(10);
  const increase = () => setount(count + 1);
  const decrease = () => setount(count - 1);
  return (
    <div>
      <h2>Count: {count} </h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}
function Person(props) {
  return (
    <div className='person'>
      <h2>Name: {props.name}</h2>
      <p>Profession: {props.profession}</p>
    </div>
  )
}

export default App;
