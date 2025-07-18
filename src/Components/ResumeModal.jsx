// ResumeModal.jsx
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Resume from './Resume';
import '../style/ResumeModal.css';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="resume-overlay" onClick={onClose} style={{zIndex:200}}>
      <div className="resume-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" style={{zIndex:299, fontSize:"2em", fontWeight:"bold"}} onClick={() => {
          console.log("Close button clicked");
          onClose();
        }}>&times;</button>
        <div className="modal-content">
          <Resume />
          <a href="/resume/Morrison_Samuel_cv.pdf"  download className="download-btn d-flex justify-content-center">
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}
