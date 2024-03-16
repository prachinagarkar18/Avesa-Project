import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Courses/>
    </div>
  )
}

export default App;
