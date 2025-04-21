import './App.css';
import { Route, Routes } from 'react-router';
import  Timer  from './component/Timer';
import Toggle from './component/Toggle';
import Bottle from './component/Bottle';
import All from './component/All';
  
function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<All/>}/>
      <Route path="/to" element={<Toggle/>}/>
      <Route path="/t" element={<Timer/>}/>
      <Route path="/b" element={<Bottle/>}/>
      <Route path="/a" element={<All/>}/>
     </Routes>
    </div>
  );
}

export default App;
