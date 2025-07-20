import React, { useRef } from "react";
import { href } from "react-router-dom";
const projects = [
  {
    title: "Adele Empowerment Foundation (CPN program center)",
    date: "May 2025",
    thumb: "/assets/project1-thumb.png",
    videoSrc: "/assets/project1.mp4",
    link: "View site",
    href: "https://adeleempowermentfoundation.org/"
  },
  {
    title: "Automated Course allocation System",
    date: "October 2024",
    thumb: "/assets/project2-thumb.png",
    videoSrc: "/assets/project2.mp4",
    link: "",
    href: ""
  },
  {
    title: "Queu MAnagement System",
    date: "April 2023",
    thumb: "/assets/project3-thumb.png",
    videoSrc: "/assets/project3.mp4",
  },
  // …more projects
];

export default function ProjectsSection() {
  const videoRefs = useRef([]);

  const handleMouseEnter = (i) => {
    const vid = videoRefs.current[i];
    if (vid) {
      vid.play();
    }
  };

  const handleMouseLeave = (i) => {
    const vid = videoRefs.current[i];
    if (vid) {
      vid.pause();
      vid.currentTime = 0;
    }
  };

  return (
    <section className="projects-section text-white py-5 bg-dark position-relative section">
      <div className="container text-white">
        <h2 className="text-center mb-5 display-4">My projects</h2>

        {projects.map((p, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={i} className="row align-items-center mb-5 project-row section ">
              {/* Media Column */}
              <div
                className={
                  "col-12 col-md-6 mb-4 mb-md-0 " +
                  (isEven ? "order-md-1" : "order-md-2")
                }
              >
                <div
                  className="ratio ratio-16x9 project-media section "
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={() => handleMouseLeave(i)}
                >
                  <img
                    src={p.thumb}
                    alt={p.title}
                    className="img-fluid project-thumb"
                  />
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    src={p.videoSrc}
                    muted
                    loop
                    className="project-video"
                    controls
                  />
                </div>
              </div>

              {/* Text Column */}
              <div
                className={
                  "col-12 col-md-6 " +
                  (isEven
                    ? "order-md-2 text-md-start text-center"
                    : "order-md-1 text-md-end text-center")
                }
              >
                <h3 className="h2">{p.title}</h3>
                <p className="" style={{color:"grey", fontWeight:"600"}}>{p.date}</p>
                <a className="" href={p.href} target="_blank" style={{color:"pink", fontWeight:"600"}}>{p.link}</a>
              </div>
            </div>
          );
        })}

     </div>
     <div id="contact"></div>
    </section>
  );
}