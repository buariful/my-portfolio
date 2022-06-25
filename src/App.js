import './App.css';
import Home from './Pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar';
import Blog from './Pages/Blog';

function App() {
  return (
    <div className="App bg-[#0A192F]">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
