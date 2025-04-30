import React from 'react';
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import { ThemeProvider, useTheme } from './ThemeContext';
import './App.css';

function MainApp() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'bg-black text-white' : 'bg-white text-black'}>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

export default App;
