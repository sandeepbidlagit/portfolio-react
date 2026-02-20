import React, { useEffect, useState } from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";

const Experience = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true)
    try {
      // const response = await fetch("/experience-data.json");
      const response = await fetch("/portfolio-react/experience-data.json");
      if (!response.ok) {
        throw new error(`HTTPS error ! status ${response.status}`)
      }
      const result = await response.json();
      setJobs(result);
      setLoading(false)
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (error) return <p>Error: {error}</p>;
  if (!jobs) return <p>Loading...</p>;

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  const { company, dates, duties, title, state } = jobs[value];

  return (
    <>
      <section id='experience' className="section">
        <div className='container'>
        <div className='experience'>
        <div className="title">
          <h2>experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {
              jobs.map((item, index) => {
                return <button key={item.id} className={`job-btn ${index === value && 'active-btn'}`} onClick={() => setValue(index)}>{item.company}</button>
              })
            }
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company} , {state}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            })}
          </article>
        </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Experience
