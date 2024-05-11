import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Find from './Components/Find';
import Error from './Components/Error';
import Gallery from './Components/Gallery';
import Services from './Components/Services';
import Footer from './Components/Footer';
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
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
