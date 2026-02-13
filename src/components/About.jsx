import React from 'react'
import aboutImage from './aboutImage.js'
const about = () => {
  return (
    <>
      <section id="about" className="section">
        <div className='container'>
          <div className='about'>
            <div className='column1'>
              <img className='about-img' src={aboutImage.aboutImg} alt="About picture" />
            </div>
            <div className='column2'>
              <h2>About Me</h2>
              <p>Front End development with over 7 + years of experience with the technologies using: <strong>HTML</strong>, <strong>CSS </strong>, <strong>Tailwind CSS </strong>, <strong> Bootstrap </strong>, <strong> Sass/Scss </strong>, <strong> React JS</strong>, <strong> JavaScript </strong>, <strong> Git</strong>
              </p>
              <p>My strengths are hardworking, self-motivated and positive mind set.
              </p>
              <p>I have done my Graduation, Bachelor of Arts — Delhi University
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default about
