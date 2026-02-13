import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa6";
const Contact = () => {
  return (
    <>
      <section id="contact" className="section">
        <div className='contact'>
        <h2>Get in Touch</h2>
        <p>Please contact me directly at <a href="mailto:sandeep.bidla556@gmail.com"> <TfiEmail className='emailIcon' />
          sandeep.bidla556@gmail.com</a> </p>
          <p className='d-flex'>Follow me <a href="https://www.linkedin.com/in/sandeep-bidla-551b75b5/" target='_blank'>  <FaLinkedin className='linkedIcon' /> </a></p>
        </div>
      </section>
    </>
  )
}

export default Contact
