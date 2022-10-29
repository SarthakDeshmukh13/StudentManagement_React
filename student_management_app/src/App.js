import logo from './logo.svg';
import './App.css';
import {Routes,BrowserRouter,Route,Navigate} from "react-router-dom"
import Home from './Home';
import Create from './Create';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="*" element={<Navigate to = "/"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
