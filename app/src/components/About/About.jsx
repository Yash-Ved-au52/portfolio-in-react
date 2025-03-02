import React from "react";

function About() {
  return (
    <section id="about" className="py-16 border-t border-[#444] ">
      <div className="container mx-auto px-4">
        {/* About Me Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-transparent mb-10">
            About Me
          </h2>
          <div className="bg-[#2c2c2c] p-8 rounded-lg border border-transparent bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-2xl hover:shadow-3xl transition-shadow duration-300 max-w-2xl mx-auto">
            <p className="text-lg text-gray-300">
              I'm Yash Ved, a MERN stack developer with a strong foundation in
              web development. I completed my BCA from Modi Institute of
              Management and Technology, Kota, under Kota University (2022).
              <br />
              <br />
              I specialize in React.js, Node.js, Express.js, and MongoDB,
              focusing on building scalable and high-performance applications.
              My experience includes working on interactive web platforms,
              management systems, and dynamic frontend applications. Currently,
              I'm expanding my skills in React Native for mobile app
              development.
              <br />
              <br />I am passionate about coding, problem-solving, and
              continuously learning new technologies. Let's connect and create
              something amazing! 🚀
            </p>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-transparent mb-10">
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Certificate 1: The Web Developer Bootcamp */}
            <div className="bg-[#2c2c2c] p-6 rounded-lg border border-transparent bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[#ff7e5f] mb-4">
                Udemy - The Web Developer Bootcamp
              </h3>
              <p className="text-gray-300 mb-4">
                Completed the Web Developer Bootcamp instructed by Colt Steele.
                This course provided a comprehensive understanding of web
                development, including HTML, CSS, JavaScript, Node.js, and more.
              </p>
              <a
                href="https://drive.google.com/file/d/1EGIOOv4D9Gd0tacy_3RNexgiCg-v96AY/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff7e5f] hover:text-[#feb47b] transition-colors duration-300"
              >
                View Certificate
              </a>
            </div>

            {/* Certificate 2: AttainU - Full Stack Web Development (MERN) */}
            <div className="bg-[#2c2c2c] p-6 rounded-lg border border-transparent bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[#ff7e5f] mb-4">
                AttainU - Full Stack Web Development (MERN)
              </h3>
              <p className="text-gray-300 mb-4">
                Successfully completed the 7-month Software Engineering Course
                with a specialization in Full Stack Web Development (MERN) at
                AttainU. This course covered React, Node.js, Express.js,
                MongoDB, and more.
              </p>
              <a
                href="https://drive.google.com/file/d/159EWFv52-AB9Wfj23NIjge2C2R1XRok7/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff7e5f] hover:text-[#feb47b] transition-colors duration-300"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-transparent mb-10">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend Skills */}
            <div className="bg-[#2c2c2c] p-6 rounded-lg border border-transparent bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[#ff7e5f] mb-4">
                Frontend
              </h3>
              <div className="space-y-3">
                <p className="text-gray-300 hover:text-[#ff7e5f] transition-colors duration-300">
                  HTML
                </p>
                <p className="text-gray-300 hover:text-[#ff7e5f] transition-colors duration-300">
                  CSS
                </p>
                <p className="text-gray-300 hover:text-[#ff7e5f] transition-colors duration-300">
                  Bootstrap
                </p>
                <p className="text-gray-300 hover:text-[#ff7e5f] transition-colors duration-300">
                  JavaScript
                </p>
                <p className="text-gray-300 hover:text-[#ff7e5f] transition-colors duration-300">
                  ReactJs
                </p>
                <p className="text-gray-300 hover:text-[#ff7e5f] transition-colors duration-300">
                  Redux
                </p>
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-[#2c2c2c] p-6 rounded-lg border border-transparent bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[#ff7e5f] mb-4">Backend</h3>
              <div className="space-y-3">
                <p className="text-gray-300 hover:text-[#ff7e5f] transition-colors duration-300">
                  Node.js
                </p>
                <p className="text-gray-300 hover:text-[#ff7e5f] transition-colors duration-300">
                  Express.js
                </p>
              </div>
            </div>

            {/* Database Skills */}
            <div className="bg-[#2c2c2c] p-6 rounded-lg border border-transparent bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[#ff7e5f] mb-4">
                Database
              </h3>
              <div className="space-y-3">
                <p className="text-gray-300 hover:text-[#ff7e5f] transition-colors duration-300">
                  MongoDB
                </p>
                <p className="text-gray-300 hover:text-[#ff7e5f] transition-colors duration-300">
                  MySQL
                </p>
              </div>
            </div>

            {/* Tools Section */}
            <div className="bg-[#2c2c2c] p-6 rounded-lg border border-transparent bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[#ff7e5f] mb-4">Tools</h3>
              <div className="space-y-3">
                <p className="text-gray-300 hover:text-[#ff7e5f] transition-colors duration-300">
                  Git
                </p>
                <p className="text-gray-300 hover:text-[#ff7e5f] transition-colors duration-300">
                  GitHub
                </p>
                <p className="text-gray-300 hover:text-[#ff7e5f] transition-colors duration-300">
                  VS Code
                </p>
                <p className="text-gray-300 hover:text-[#ff7e5f] transition-colors duration-300">
                  Postman
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
