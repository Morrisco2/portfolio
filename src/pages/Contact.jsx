import React, { useState, useEffect } from 'react'
import "../style/ContactForm.css"

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false);
  const [responesMSG, setResponesMSG] = useState("");
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setResponesMSG("sending...")
    console.log(formData);
    
    setSubmitted(true);
  }

  useEffect(() => {
    if (!submitted) return;

    const sendData = async () => {
      try {
        const res = await fetch("http://localhost:3000/sendEmail", {
          method: "POST",
          headers: {
            "content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });

        const respones = await res.json();

        if (respones.status === "ok") {
          setStatus("sent")
          setResponesMSG("email sent successfully");
          setFormData({ name: "", email: "", message: "" })
        } else {
          setStatus("failed")
          setResponesMSG("Failed to send email! try again")
        }
      } catch (error) {
        setStatus("failed")
        console.log("error sending data: ", error);
        setResponesMSG("server error");

      } finally {
        setSubmitted(false)
      }
    }

    sendData()


  }, [submitted, formData])

  return (
    <>
      <section className='mt-5 py-5 section formContainer'>
        <h1 className='text-white w-100 d-flex justify-content-center'>CONTACT ME</h1>
        <div className="container my-5 d-flex justify-content-center align-items-center section">
          <form className="glass-form p-4 rounded shadow-lg w-75 d-flex section " onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
            <div className="form-group position-relative mb-4">
              <label className="floating-label">Full Name</label><br />
              <input type="text" required className="form-controlcss" name='name' value={formData.name} onChange={handleChange} placeholder='Enter Your Full name' />
            </div>
            <div className="form-group position-relative mb-4">
              <label className="floating-label">Email</label><br />
              <input type="email" required className="form-controlcss " name='email' value={formData.email} onChange={handleChange} placeholder='Enter Your Email' />
            </div>
            <div className="form-group position-relative mb-4">
              <label className="floating-label">Message</label><br />
              <textarea required className="form-controlcss" placeholder='message' name='message' value={formData.message} onChange={handleChange} rows="4"/>
            </div>
            <button type="submit" className="btn  w-75 submitContact" value={responesMSG}>Submit</button>
            <p  className={`messageAlert ${status} w-75`}>{responesMSG}</p>
          </form>
        </div>

      </section>
      <div className='w-100 d-flex justify-content-center py-5 mb-5 contactInfo'>
        <h1 className='text-white mb-5 pt-2 section'>Contact Information</h1>
        <div className='info px-4 section'>

          <h4><i className="fas fa-phone mx-3 mb-2 icon">:</i>
            +2349075624771 | +2348059294675</h4>
          <h4><i className="fas fa-envelope mx-3 icon">:</i>
            morriscotech@gmail.com</h4>
        </div>
      </div>
    </>
  )
}

export default Contact