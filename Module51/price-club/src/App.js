
import './App.css';
import AssignmentMarks from './AssignmentMarks/AssignmentMarks';
import Navbar from './component/Navbar/Navbar';
import Pricing from './component/Pricing/Pricing';
import PhoneBar from './PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h3 className='text-4xl'>Hello</h3>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>

    </div>
  );
}

export default App;
