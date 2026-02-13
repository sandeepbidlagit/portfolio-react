import React, { useEffect, useState } from 'react'
import { GoArrowRight } from "react-icons/go";

const Work = () => {

  const [portfolio, setPortfolio] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("/work.json");
      if (!response.ok) {
        throw new error(`HTTPS error ! status ${response.status}`)
      }
      const result = await response.json();
      setPortfolio(result);

    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <section id="work" className="section">
        <div className='container'>
          <div className="title">
            <h2>My Work</h2>
            <p>Projects I worked on. Each of them containing its own case study.</p>
            <div className="underline"></div>
          </div>
          <div className='work'>
            {portfolio.map((items) => {
              const { id, description, image, cta, href, target } = items;
              return (
                <div className='block' key={id}>
                  <img src={image} alt="portfolio picture" />
                  <p>{description}</p>
                  <a href={href} target={target} className='btn'>  {cta} <GoArrowRight className='icon' /></a>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Work
