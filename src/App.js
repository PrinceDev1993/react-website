import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./index.css";
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Project from './routes/Project';




function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
        <Route path='/Project' element={<Project />} />
      </Routes> 
    </>
  );
}

export default App;
