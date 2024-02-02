import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Service from './Components/Service/Service';
import About from './Components/About/About';
import './App.css'; 

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path='/service' element={<Service/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
