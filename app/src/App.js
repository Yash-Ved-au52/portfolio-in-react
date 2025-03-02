import React from 'react';
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
    <div className=" bg-[#1a1a1a] text-white">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
      </div>
      </>
  );
}

export default App;