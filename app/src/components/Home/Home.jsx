import React from 'react';
import './home.scss';
import './home.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import avtarImage from '../images/avtar-image.jpeg'; // Import the image

function Home() {
  return (
    <section id="home">
      <div className="bubbles">
        {[...Array(50)].map((_, index) => (
          <div className="bubble" key={index}></div>
        ))}
        <div className='home-container-1'>
          <img src={avtarImage} alt='avtar-image'></img> 
          <h1 className='name'>Yash Ved</h1>
          <h4 className='n1'>Full stack developer (MERN)</h4>
          <div className='icon-container'>
            <a href='https://github.com/Yash-Ved-au52'><GitHubIcon /></a>
            <a href='https://www.linkedin.com/in/yash-ved-05b694231/'><LinkedInIcon/></a>
            <a href='https://x.com/yashved01?t=vJeRJNL2laEplvGUBMaWLA&s=09'><XIcon/></a>
            <a href='mailto:yashved01@gmail.com'><EmailIcon/></a>
            <a href='https://www.instagram.com/yash_ved01/'><InstagramIcon/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
