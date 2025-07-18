import React, { useState, useEffect } from 'react';

function Navbar({ onCVClick }) {
    const [isOpen, setIsOpen] = useState(false);

    // Automatically close menu on link click (for single-page nav)
    const handleLinkClick = () => setIsOpen(false);

    useEffect(() => {
        // Update toggler icon on collapse events
        const collapseEl = document.getElementById('navbarNav');
        collapseEl?.addEventListener('hide.bs.collapse', () => setIsOpen(false));
        collapseEl?.addEventListener('show.bs.collapse', () => setIsOpen(true));

        return () => {
            collapseEl?.removeEventListener('hide.bs.collapse', () => setIsOpen(false));
            collapseEl?.removeEventListener('show.bs.collapse', () => setIsOpen(true));
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
                <a className="navbar-brand"><b>Morrison Samuel</b></a>

                {/* Toggler with dynamic icon */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    {isOpen ? (
                        <span style={{ fontSize: '1.5rem', color: 'white' }}>✖</span>
                    ) : (
                        <span className="navbar-toggler-icon" />
                    )}
                </button>

                {/* Collapsible menu */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto d-flex flex-lg-row justify-content-center text-center">
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#home" onClick={handleLinkClick}>Home</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#aboutMe" onClick={handleLinkClick}>About Me</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#projects" onClick={handleLinkClick}>Projects</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#contact" onClick={handleLinkClick}>Contact</a>
                        </li>
                    </ul>

                    {/* CV button wired to modal logic */}
                    <div className="d-lg-block ms-auto navbar-item d-flex justify-content-center cvContainer">
                        <a
                            href="#"
                            className="btn btn-light fw-bold cv"
                            onClick={e => {
                                e.preventDefault();
                                onCVClick();
                            }}
                        >
                            CV <i className="fas fa-download"></i>
                        </a>
                    </div>

                    {/* Contact Me button */}
                    <div className="d-lg-block ms-auto d-flex justify-content-center contactBtn">
                        <a
                            href="#contact"
                            className="btn btn-light fw-bold contactBtn2"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
