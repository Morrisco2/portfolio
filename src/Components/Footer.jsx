import React from 'react'
import "../style/Footer.css"
const Footer = () => {
    return (
        <section className='footerContainer py-5'>
            <div className="row w-75 nameContainer mb-4">
                <div className="col-12 col-md-6 myNameFooter mb-4 ">
                    <h4>Morrison Samuel</h4>
                </div>
                <div className="col-12 col-md-6 links row">
                    <a href="#home" className='contactBtn2 col-6 col-md-2'><small>Home</small></a>
                    <a href="#aboutMe" className='contactBtn2 col-6 col-md-3'>About Me</a>
                    <a href="#projects" className='contactBtn2 col-6 col-md-3'>Projects</a>
                    <a href="#contact" className='contactBtn2 col-6 col-md-3'>Contact</a>
                </div>
            </div>
            <p className='right w-100 d-flex justify-content-center my-4'>@2025 Morrison Samuel All Right reserved</p>
        </section>
    )
}

export default Footer