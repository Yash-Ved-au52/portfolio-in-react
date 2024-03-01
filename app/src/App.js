import React from 'react';
import './App.css';
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Home/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
