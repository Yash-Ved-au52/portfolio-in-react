import React from 'react';
import avtarImage from '../images/avtar-image-2.png';
import CVDownloadButton from '../Header/cv-download';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';

function Home() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Image - Top in mobile view */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] blur-lg opacity-20 animate-pulse"></div>
            <motion.img
              src={avtarImage}
              alt="Yash Ved"
              className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl z-10"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </div>
        </motion.div>

        {/* Text Content - Below image in mobile, left in desktop */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-2"
            variants={item}
          >
            Hi, I'm
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-transparent mb-4"
            variants={item}
          >
            Yash Ved
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-serif"
            variants={item}
          >
            Full Stack Web Developer
          </motion.p>

          {/* Social Icons */}
          <motion.div 
            className="flex justify-center md:justify-start space-x-4 md:space-x-6 mb-8"
            variants={item}
          >
            {[
              { icon: <FiGithub />, url: "https://github.com/Yash-Ved-au52" },
              { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/yash-ved-05b694231/" },
              { icon: <FiTwitter />, url: "https://x.com/yashved01" },
              { icon: <FiMail />, url: "mailto:yashved01@gmail.com" },
              { icon: <FiInstagram />, url: "https://www.instagram.com/yash_ved01/" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[#ff7e5f] dark:hover:text-[#ff7e5f] transition-all duration-300 text-2xl md:text-3xl"
                whileHover={{ y: -5 }}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div 
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
            variants={item}
          >
            <motion.a
              href="#contact"
              className="px-6 py-3 rounded-lg text-lg font-semibold border-x-2 hover:bg-transparent hover:border-2 hover:border-[#ff7e5f] hover:text-[#ff7e5f] transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
            <CVDownloadButton />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;