import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Service from './Service'; // Import your Service component here

function App() {
  return (
    <Router>
        <Navbar /> 
        <Routes>
          <Route path='/service' element={<Service/>}/>
        </Routes>
    </Router>
  );
}

export default App;
