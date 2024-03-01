import React from 'react';
import './About.css';
import Project from '../Projects';

function About() {
  return (
    <section id='about'>
      <div className='about-1'>
        <p className='p1'>Hey!</p>
        <p>I'm Yash Ved from Bhawani mandi!<br></br>
        I love programming, as well as running, taking photos, and learning new things!
        <br></br>
        Feel free to get in touch.
        </p>
      </div>
      <div className='portfolio'>
        <h2>Portfolio</h2>
      </div>
    <div className='about-container'>
      <h2 className='d-flex justify-content-center'>Skills</h2>
      <div className='about-container-1'>
        
        <div className='skills-container'>
          <h3>Frontend</h3>
          <div className='s bg-black text-light' >HTML</div>
          <div className='s bg-dark text-danger'>CSS</div>
          <div className='s text-success bg-dark'>Bootstrap</div>
          <div className='s text-info bg-dark'>JavaScript</div>
          <div className='s text-warning bg-dark'>ReactJs</div>
          <div className='s text-primary bg-dark'>Redux</div>
        </div>
        <div className='skills-container'>
          <h3>Backend</h3>
          <div className='s text-info bg-dark'>Node.js</div>
          <div className='s text-warning bg-dark'>Express.js</div>
        </div>
        <div className='skills-container'>
          <h3>Database</h3>
          <div className='s bg-black text-light' >MongoDb</div>
          <div className='s bg-dark text-danger'>MySql</div>
        </div>
        <div className='skills-container'>
          <h3>DevOps</h3>
          <div className='s bg-black text-light' >Git</div>
          {/* <div className='s bg-dark text-danger'>Github</div> */}
        </div>
      </div>
      {/*Skills section end here */}

      <Project/>
      </div>
      </section>
  );
}

export default About;
