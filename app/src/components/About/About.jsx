import React from "react";
import { motion } from "framer-motion";

function About() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardHover = {
    scale: 1.03,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  };

  const cardTap = {
    scale: 0.98,
  };

  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Redux", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    database: ["MongoDB", "MySQL", "Firebase"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  };

  return (
    <section
      id="about"
      className="py-16 border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700"
    >
      <div className="container mx-auto px-4">
        {/* About Me Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-transparent mb-10"
            variants={item}
          >
            About Me
          </motion.h2>

          <motion.div
            className="relative bg-white dark:bg-gray-800 p-8 rounded-xl border-2 border-transparent hover:border-[#ff7e5f30] shadow-2xl hover:shadow-[0_10px_30px_-15px_rgba(255,126,95,0.3)] transition-all duration-500 max-w-4xl mx-auto overflow-hidden"
            variants={item}
            whileHover={{
              y: -8,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            {/* Floating gradient background elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#ff7e5f20] rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#feb47b20] rounded-full filter blur-3xl"></div>

            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#ff7e5f50] rounded-tl-xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#feb47b50] rounded-br-xl"></div>

            {/* Animated floating dots */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-[#ff7e5f] rounded-full"
                style={{
                  width: Math.random() * 6 + 2,
                  height: Math.random() * 6 + 2,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: 0.3,
                }}
                animate={{
                  y: [0, (Math.random() - 0.5) * 20],
                  x: [0, (Math.random() - 0.5) * 20],
                }}
                transition={{
                  duration: Math.random() * 10 + 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Content with improved typography */}
            <div className="relative z-10">
              <motion.p
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-[#ff7e5f] font-semibold">
                  Hello! I'm Yash Ved
                </span>
                , a passionate MERN stack developer dedicated to crafting
                exceptional digital experiences. With a BCA degree from Modi
                Institute of Management and Technology, I combine formal
                education with hands-on expertise in modern web technologies.
              </motion.p>

              <motion.div
                className="flex justify-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <div className="w-16 h-1 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-full"></div>
              </motion.div>

              <motion.p
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                My expertise spans the entire web development stack, with
                particular proficiency in{" "}
                <span className="text-[#ff7e5f] font-medium">React.js</span>,{" "}
                <span className="text-[#ff7e5f] font-medium">Node.js</span>, and{" "}
                <span className="text-[#ff7e5f] font-medium">MongoDB</span>. I
                specialize in building scalable, performant applications that
                deliver seamless user experiences across platforms.
              </motion.p>

              <motion.p
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Beyond coding, I'm passionate about{" "}
                <span className="text-[#ff7e5f] font-medium">
                  problem-solving
                </span>{" "}
                and{" "}
                <span className="text-[#ff7e5f] font-medium">
                  continuous learning
                </span>
                . I thrive on turning complex challenges into elegant solutions
                and stay at the forefront of emerging technologies to deliver
                cutting-edge results.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-transparent mb-10"
            variants={item}
          >
            Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certificate 1 */}
            <motion.div
              className="relative bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              variants={item}
              whileHover={cardHover}
              whileTap={cardTap}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ff7e5f] rounded-lg opacity-30 transition-all duration-500"></div>

              {/* Floating animation for icon */}
              <motion.div
                className="absolute -top-5 -right-5 text-[#ff7e5f] opacity-10 group-hover:opacity-20 text-7xl"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ✓
              </motion.div>

              <h3 className="text-xl font-bold text-[#ff7e5f] mb-4 relative z-10">
                The Web Developer Bootcamp
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed relative z-10">
                Completed Colt Steele's comprehensive bootcamp covering HTML,
                CSS, JavaScript, Node.js, and other essential web technologies.
                Gained hands-on experience building full-stack applications from
                scratch.
              </p>
              <motion.a
                href="https://drive.google.com/file/d/1EGIOOv4D9Gd0tacy_3RNexgiCg-v96AY/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white rounded-lg hover:from-[#ff6f4f] hover:to-[#fea46b] transition-all duration-300 relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Certificate
              </motion.a>
            </motion.div>

            {/* Certificate 2 */}
            <motion.div
              className="relative bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              variants={item}
              whileHover={cardHover}
              whileTap={cardTap}
            >
              {/* Particle animation */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-[#ff7e5f] rounded-full"
                    style={{
                      width: Math.random() * 5 + 2,
                      height: Math.random() * 5 + 2,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: 0,
                    }}
                    animate={{
                      opacity: [0, 0.3, 0],
                      y: [0, -20],
                      x: [0, (Math.random() - 0.5) * 20],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              <h3 className="text-xl font-bold text-[#ff7e5f] mb-4 relative z-10">
                Full Stack Web Development (MERN)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed relative z-10">
                Completed AttainU's intensive 7-month program specializing in
                MERN stack. Mastered React, Node.js, Express.js, and MongoDB
                through project-based learning and real-world application
                development.
              </p>
              <motion.a
                href="https://drive.google.com/file/d/159EWFv52-AB9Wfj23NIjge2C2R1XRok7/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white rounded-lg hover:from-[#ff6f4f] hover:to-[#fea46b] transition-all duration-300 relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Certificate
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Section */}
        {/* Skills Section */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-transparent mb-10"
            variants={item}
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                className="relative bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700 shadow-lg transition-all duration-200 group"
                variants={item}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 },
                }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff7e5f10] to-[#feb47b10] opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-200 -z-10"></div>

                {/* Category icon */}
                <div className="absolute bottom-3 right-3 text-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-200">
                  {category === "frontend" && "💻"}
                  {category === "backend" && "⚙️"}
                  {category === "database" && "🗄️"}
                  {category === "tools" && "🛠️"}
                </div>

                <h3 className="text-xl font-bold text-[#ff7e5f] mb-4 flex items-center">
                  <span className="w-2 h-2 bg-[#ff7e5f] rounded-full mr-2 group-hover:animate-pulse"></span>
                  {category}
                </h3>

                <div className="space-y-2">
                  {items.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="text-gray-700 dark:text-gray-300 flex items-center transition-colors duration-150 hover:text-[#ff7e5f]"
                      whileHover={{ x: 3 }}
                      transition={{ type: "tween", duration: 0.1 }}
                    >
                      <span className="w-2 h-2 bg-[#ff7e5f] rounded-full mr-2"></span>
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
