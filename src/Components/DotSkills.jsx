import React from "react";
import "../style/DotSkills.css"; 

const skills = [
  { name: "CSS", level: 9 },
  { name: "HTML", level: 9 },
  { name: "Bootstrap", level: 8 },
  { name: "JavaScript", level: 9 },
  { name: "React", level: 7 },
  { name: "TypeScript", level: 6 },
  { name: "Node.js", level: 8 },
  { name: "PostgreSQL", level: 9 },
  { name: "MYSQL", level: 8 },
];

const DotSkills = () => {
  return (
    <div className="container py-5 text-white">
      <h2 className="text-center mb-4 section">My Skills</h2>
      <div className="row">
        <div className="col-md-6 section">
          {skills.slice(0, 4).map((skill, index) => (
            <div key={index} className="mb-3 d-flex align-items-center justify-content-center">
              <div className="me-3 fw-semibold" style={{ width: "90px" }}>{skill.name}</div>
              <div className="dots-container">
                {[...Array(10)].map((_, i) => (
                  <span
                    key={i}
                    className={`dot ${i < skill.level ? "filled" : ""}`}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-6 section">
          {skills.slice(4).map((skill, index) => (
            <div key={index} className="mb-3 d-flex align-items-center justify-content-center">
              <div className="me-3 fw-semibold" style={{ width: "90px" }}>{skill.name}</div>
              <div className="dots-container">
                {[...Array(10)].map((_, i) => (
                  <span
                    key={i}
                    className={`dot ${i < skill.level ? "filled" : ""}`}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DotSkills;
