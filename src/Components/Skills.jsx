import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "PHP", level: 85 },
    { name: "MySQL", level: 80 },
  ];

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">My Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-3">
          <label className="form-label">{skill.name}</label>
          <div className="progress">
            <div
              className="progress-bar bg-dark"
              role="progressbar"
              style={{ width: `${skill.level}%` }}
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {skill.level}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
