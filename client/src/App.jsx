import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Find from './Components/Find';
import Error from './Components/Error';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import Activity from './Components/Activity';
import Current from './Components/Current';
import Editprofile from './Components/Editprofile';
import { isSignedIn,useUser } from '@clerk/clerk-react'
import { useState } from 'react';
import { AppContext } from '../context/AppContext';

function App() {
  const { isSignedIn, user } = useUser();
  const [authState, setAuthState]  = useState(false);
  if (isSignedIn){
    setAuthState(true);
  }
  else{
    
  }
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/current" element={<Current />} />
        <Route path="/edit_profile" element={<Editprofile />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
