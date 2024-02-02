import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Service from './Components/Service/Service';
import About from './Components/About/About';
import './App.css'; 
import Contact from './Components/Contact';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path='/service' element={<Service/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
