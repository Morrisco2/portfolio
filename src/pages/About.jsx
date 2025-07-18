import React from 'react'
import DotSkills from '../Components/DotSkills'

const About = () => {
  return (
    <section className='aboutMe section mb-5'>
      <h1 className='section'>ABOUT ME</h1>
      <div className="aboutDivs section">
        <div className='aboutImageContainer'>
          <div className="aboutImage section"></div>
          <div></div>
          <div></div>
        </div>
        <div className="aboutText">
          <div className="aboutArrow">
            <img src="assets/arrow.png" alt="arrow" height="50px" width="100px" loading='lazy' />
          </div>
          <div className="aboutP section">
            <p className='mb-4'>
              I'm Morrison Samuel, a certified full-stack web developer with over 4 years of experience building modern, scalable web applications. I specialize in React, Node.js,TypeScript, HTML, CSS, Bootstrap,JavaScript, PostgeSQL and MySQL creating tools that help businesses run more efficiently.
              I've built everything from Course Enrollment Management system, E-Commerce Website, etc, and I take pride in writing clean, reusable code that solves real problems.  When I’m not coding, I enjoy mentoring aspiring developers and diving into UI/UX improvements that elevate user experiences. I'm currently open to remote roles and freelance opportunities. Let’s work together to bring your next idea to life.<br />
            </p>
            <div className='btnConatiner w-100 d-flex px-4 mt-4'>
              <a href="#contact"><button className='contactBtn2'>Contact Me</button></a>
            </div>

          </div>
        </div>
      </div>
      <div className="skill">

        <DotSkills />
      </div>
      <div id='projects'></div>
    </section>
  )
}

export default About