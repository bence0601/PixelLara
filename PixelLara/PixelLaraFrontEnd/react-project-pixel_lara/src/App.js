import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Service from './Components/Service'; // Import your Service component here
import About from './About/About';

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
