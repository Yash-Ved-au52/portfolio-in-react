import React, { useState, useEffect } from 'react';
import './Navbar.css'; 
import CVDownloadButton from './cv-download'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);

  const toggleMenu = ()=>{
    setIsOpen(!isOpen);
    setShowAchievements(false); // Close achievements dropdown when menu toggles
  };

  const handleAchievementsMouseEnter = () => {
    setShowAchievements(true);
  };

  const handleAchievementsMouseLeave = () =>{
    setShowAchievements(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsScrolled(!isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`Navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">YV</div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li className="dropdown"
            onMouseEnter={handleAchievementsMouseEnter}
            onMouseLeave={handleAchievementsMouseLeave}>
            <a >Achievements</a>
            {showAchievements && (
              <div className="dropdown-content">
                <a href="https://drive.google.com/file/d/159EWFv52-AB9Wfj23NIjge2C2R1XRok7/view?usp=sharing" onClick={toggleMenu}>AttainU</a>
                <a href="https://drive.google.com/file/d/1EGIOOv4D9Gd0tacy_3RNexgiCg-v96AY/view?usp=sharing" onClick={toggleMenu}>Udemy</a>
              </div>
            )}
          </li>
          {/* <li><a href="#contact" onClick={toggleMenu}>Contact</a></li> */}
          <li><CVDownloadButton /></li> {/* Include the CVDownloadButton component */}
        </ul>
      </div>
      <div className="toggle-btn" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
