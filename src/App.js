import { Router } from 'react-router';
import './App.css';
import All from './component/All';
  
function App() {
  return (
    <div className="App">
      <Router>
        <All/>
      </Router>
    </div>
  );
}

export default App;
