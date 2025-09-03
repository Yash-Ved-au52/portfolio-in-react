import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

function Footer() {
  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/Yash-Ved-au52" },
    {
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/yash-ved-05b694231/",
    },
    { icon: <FiTwitter />, url: "https://x.com/yashved01" },
    { icon: <FiMail />, url: "mailto:yashved01@gmail.com" },
  ];

  return (
    <footer
      id="footer"
      className="relative py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
       {/* Gradient Divider - Replacing the wave  */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff7e5f] to-transparent opacity-20 dark:via-[#feb47b]"></div>

       {/* Decorative Dots Pattern  */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#ff7e5f] dark:bg-[#feb47b]"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-[#ff7e5f] dark:hover:text-[#ff7e5f] text-2xl"
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center pt-8 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Yash Ved. All rights reserved.
          </p>

          <motion.p
            className="text-sm text-gray-500 dark:text-gray-400 mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Crafted with{" "}
            <span className="text-[#ff7e5f] dark:text-[#feb47b]">♥</span> using
            React & Tailwind CSS
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
