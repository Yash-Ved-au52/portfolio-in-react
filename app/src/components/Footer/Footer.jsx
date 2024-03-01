import React from 'react';
import "./Footer.css";
import CVDownloadButton from '../Header/cv-download'; 

function Footer() {
  return (
    <section id='contact'>
    <footer className="footer">
        <div className='footer-container'>
        <div className='footer-sections'>
          <div className='footer-section'>
            <h4>Contact me</h4>
            <ul>
              <li>
                <span>Email: </span>
                <a className='a1' href='mailto:yashved01@gmailcom'>yashved01@gmail.com</a>
              </li>
              <li>
                <span>Mobile no: </span>
                <label>9587291326</label>
              </li>
              <li>
                <span>Address: </span>
                <label>Near new tehsil, Bhawani mandi (Raj.)</label>
              </li>
            </ul>
          </div>
          <div className='footer-section'>
            <h4>Site map</h4>
            <ul>
              <li>
                <a href='#home' className='txt-denger'>Home</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Achievements
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="https://drive.google.com/file/d/159EWFv52-AB9Wfj23NIjge2C2R1XRok7/view?usp=sharing">AttainU</a></li>
                  <li><a className="dropdown-item" href="https://drive.google.com/file/d/1EGIOOv4D9Gd0tacy_3RNexgiCg-v96AY/view?usp=sharing">Udemy</a></li>
                </ul>
              </li>
              <li className='cv'>
              <CVDownloadButton />
              </li>
            </ul>
          </div>
        </div>
        <div className='fb1'>
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </section>
  );
}

export default Footer;
