import React from 'react';
import avtarImage from '../images/avtar-image-2.png'; // Import the image
import CVDownloadButton from '../Header/cv-download'; // Import the CVDownloadButton component
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';


function Home() {
  return (
    <section id="home" className="h-screen flex flex-col md:flex-row items-center justify-center bg-[#1a1a1a]">
      {/* Content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between md:gap-8">
        
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
          <p className="text-xl text-gray-400 mb-2">Hi, I'm</p>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-transparent mb-4">
            Yash Ved
          </h1>
          <p className="text-xl text-gray-300 mb-6">Full stack web developer</p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mb-8">
            <a href="https://github.com/Yash-Ved-au52" className="text-gray-400 hover:text-[#ff7e5f] transition transform hover:scale-110">
              <GitHubIcon style={{ fontSize: '2rem' }} />
            </a>
            <a href="https://www.linkedin.com/in/yash-ved-05b694231/" className="text-gray-400 hover:text-[#ff7e5f] transition transform hover:scale-110">
              <LinkedInIcon style={{ fontSize: '2rem' }} />
            </a>
            <a href="https://x.com/yashved01?t=vJeRJNL2laEplvGUBMaWLA&s=09" className="text-gray-400 hover:text-[#ff7e5f] transition transform hover:scale-110">
              <TwitterIcon style={{ fontSize: '2rem' }} />
            </a>
            <a href="mailto:yashved01@gmail.com" className="text-gray-400 hover:text-[#ff7e5f] transition transform hover:scale-110">
              <EmailIcon style={{ fontSize: '2rem' }} />
            </a>
            <a href="https://www.instagram.com/yash_ved01/" className="text-gray-400 hover:text-[#ff7e5f] transition transform hover:scale-110">
              <InstagramIcon style={{ fontSize: '2rem' }} />
            </a>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <a href="#about" className="px-8 py-3 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white rounded-lg text-lg font-semibold hover:from-[#ff6f4f] hover:to-[#fea46b] transition transform hover:scale-105">
              Let's Connect
            </a>
            <CVDownloadButton />
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0">
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
            <img
              src={avtarImage}
              alt="avatar"
              className="w-full h-full rounded-full object-cover border-4 border-white border-opacity-20 shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
