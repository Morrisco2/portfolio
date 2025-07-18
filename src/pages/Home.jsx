import React from 'react'
import useScrollAnimation from '../hooks/UseScrollAnimation'

//local import

const Home = () => {
  useScrollAnimation()
  return (

    <div className="home section container-fluid px-4 py-5 section" id='home'>
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="name col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start">
          <div className='fullStack'><h2 className="typewriter">FULL-STACK WEB DEVELOPER</h2></div>
          <h1 className="myName">MORRISON SAMUEL</h1>
          <p className="mt-3 " style={{textAlign:"start", borderLeft: "3px solid #360047", padding: "6px 12px" }}>
            I'm a full-stack web developer,<br /> And I'm open for all remote jobs
          </p>
          <a href="#contact"><button className="btn mt-3 contactBtn2">Contact Me Now</button></a>
        </div>

        {/* Image Section */}
        <div className="myImage col-12 col-md-6 text-center section">
          <img
            src="assets/Morrisco1.png"
            alt="Morrison"
            className="img-fluid"
            style={{ maxHeight: '600px' }}
            loading="lazy"
          />
        </div>
      </div>
      <div id='aboutMe'></div>
    </div>

  )
}

export default Home