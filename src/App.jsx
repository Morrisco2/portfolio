import React,  { useState } from 'react'



// internal url
import Navbar from './Components/Navbar';
import ResumeModal from './Components/ResumeModal';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import ProjectsSection from './pages/Project';
import Footer from './Components/Footer';

const App = () => {
  const [showResume, setShowResume] = useState(false);


  return (
    <>

      <div>
        <Navbar onCVClick={() => setShowResume(true)} />
        <div className='mt-5'>
          {<Home />}
          {<About />}
          {<ProjectsSection />}
          {<Contact />}
          {<Footer />}
        </div>

        {showResume && (
          <ResumeModal onClose={() => setShowResume(false)} />
        )}
      </div>

    </>
  )
}

export default App