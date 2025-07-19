// Resume.jsx
import React from 'react';
import '../style/Resume.css';

export default function Resume() {
    return (
        <div className="resume-container">
            {/* Header */}
            <header className="resume-header">
                <div className="header-info">
                    <h1 className="name">Morrison Samuel</h1>
                    <p className="title">Full-Stack Web Developer</p>
                </div>
                <div className="contact-info ">
                    <p><span className="icon"><i className="fas fa-phone "></i></span> +2348059294675</p>
                    <p><span className="icon"><i className="fas fa-envelope  " style={{ marginRight: "10px" }}></i></span>morriscotech@gmail.com</p>
                    <p><span className="icon "><img
                        src="https://github.githubassets.com/favicons/favicon.svg"
                        alt="GitHub"
                        style={{ width: '16px', marginRight: '8px', verticalAlign: 'middle' }}
                    /></span> <a href="https://github.com/morrisco2/" target='_blank' style={{ textDecoration: "none", color: "grey" }}>morrisco2</a> </p>
                    <p><span className="icon ">
                        <img
                            src="https://static.licdn.com/scds/common/u/images/logos/favicons/v1/favicon.ico"
                            alt="LinkedIn"
                            style={{
                                width: '16px',
                                height: '16px',
                                marginRight: '8px',
                                verticalAlign: 'middle',
                            }}
                        /></span><a href="https://www.linkedin.com/in/morrison-samuel-7143b6365" target='_blank' style={{ textDecoration: "none", color: "grey" }}>morrison Samuel</a></p>
                </div>
            </header>

            {/* Summary */}
            <section className="resume-summary">
                <h2>Professional Summary</h2>
                <p>
                    I am a passionate Full-Stack Web Developer with over 4 years of
                    experience building scalable and performant web applications. Skilled
                    in  React, Node.js, TypeScript, HTML, CSS, Bootstrap, JavaScript, PostgeSQL and MySQL,
                    I deliver clean, maintainable
                    code and drive projects that improve user experience and efficiency.
                </p>
            </section>

            {/* Skills & Experience */}
            <section className="resume-main">
                <aside className="skills">
                    <h2>Core Skills</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React </li>
                        <li>Node.js / Express</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>MySQL / PostgreSQL</li>
                        <li>Git</li>
                    </ul>
                </aside>
                <article className="experience">
                    <h2>Professional Experience</h2><br />
                    <div>
                        <b>Front‑End Developer Intern, White Creativity</b><br />
                        <i>Jan 2021 – Jun 2021</i>
                        <ul>
                            <li>
                                Completed White Creativity’s Front‑End Developer certification program, mastering HTML5, CSS3, and modern JavaScript frameworks.

                            </li>
                            <li>
                                Collaborated on internal prototype websites, translating UI mockups into responsive, accessible pages.
                            </li>
                        </ul>
                    </div>
                    <div>

                        <b>Full‑Stack Developer Trainee, CPN Program</b><br />
                        <i>Nov 2024 – Feb 2025</i>
                        <ul>
                            <li>
                                Selected for the Certified Professional Network (CPN) fellowship, covering Node.js, Express, React, and relational databases.

                            </li>
                            <li>
                                Built and deployed a full‑stack blog application as a capstone, integrating user authentication and CRUD operations.
                            </li>
                        </ul>

                    </div>
                    <div>
                        <b>Back-End Developer Intern, JodnaTechnologies</b><br />
                        <i>Mar 2025 – Present</i>
                        <ul>
                            <li>
                                back‑end development for enterprise solutions using Node.js and PostgreSQL.

                            </li>
                            <li>
                                Optimized API performance (reduced average response time by 35%) and wrote unit tests to ensure code reliability.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <b>Independent Projects & Client Work</b><br />
                        <ul>
                            <li>
                                <b>CPN Program center Website:</b> After demonstrating initiative, was entrusted to design, build, and deploy the program’s center public site end‑to‑end.

                            </li>
                            <li>
                                <b>Academic Projects:</b> Developed several full‑stack applications for final‑year coursework, including inventory management and scheduling tools (local deployments).
                            </li>
                        </ul>
                    </div>
                </article>
            </section>

            {/* Projects */}
            <section className='row' >
                <div className="projects col-12 col-md-6 ">
                    <h2>Selected Projects</h2>
                    <div className="project-list">
                        <div className="cpn">
                            <b>CPN program Center Website</b><br />
                            <i>Full-Stack Developer (Internship Project)</i>
                            <p><b>Tech Stack:</b> HTML, CSS,Bootstrap JavaScript, Node js, PostgreSQL</p>
                            <a href="https://adeleempowermentfoundation.org/" target='_blank' style={{ textDecoration: "none" }}>Adele Empowerment Foundation</a>
                            <ul>
                                <li>
                                    Developed and deployed the official website for the organization as part of the CPN certification program.
                                </li>
                                <li>
                                    I'm Solely responsible for both frontend and backend architecture, user authentication, admin panel, and mobile responsiveness.
                                </li>
                                <li>
                                    The website was built using the organization’s repository and deployed under their official domain. And the project was approved and mentained by the organisation
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

                <div className="education col-12 col-md-6">
                    <h2>Education & Certifications</h2>
                    <div className="cpn">
                        <b>Bachelor of Science, Computer Science</b><br />
                        <i><b>Ignatius Ajuru University of Education (IAUE) </b>--Class of 2024</i>
                        <ul>
                            <li>
                                Gained foundational knowledge in software development, algorithms, and database systems
                            </li>

                        </ul>
                    </div>
                    <div className="cpn">
                        <b> Full-Stack Developer Program</b><br />
                        <i><b>Computer Professional (Registration Councel) of Nigeria (CPN)  </b>--2024–2025 </i>
                        <ul>
                            <li>
                                Covered key technologies:HTML, CSS, Bootstrap,JavaScript, React, Node.js, Express, PostgreSQL, MYSQL, Git
                            </li>

                        </ul>
                    </div>
                    <div className="cpn">
                        <b>Front-End Development Certification</b><br />
                        <i><b>WhiteCreativity Culture  </b>--2021</i>
                        <p><b>Tech Stack:</b> HTML, CSS,Bootstrap JavaScript </p>
                        <ul>
                            <li>
                                Completed an intensive front-end development program
                            </li>

                        </ul>
                    </div>

                </div>
            </section>

            {/* Education */}

        </div>
    );
}
