import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Find from './Components/Find';
function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/find" element={<Find />} />
      </Routes>
    </div>
  );
}

export default App;
