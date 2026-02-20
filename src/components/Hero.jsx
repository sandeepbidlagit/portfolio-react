import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [hero, setHero] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("/portfolio-react/hero.json");
      if (!response.ok) {
        throw new error(`HTTPS error ! status ${response.status}`)
      }
      const result = await response.json();
      setHero(result);
    } catch (error) {
      setError(error.message)
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <section id="home" className="section">
        {hero.map((items) => {
          const { id, image, title, text, description } = items;
          return (
            <div className='hero' key={id}>
              <img className="hero-img" src={image} alt={title} />
              <h2 className="hero-subtitle">{title}</h2>
              {/* for json br tag dont need h1 closing tag here and using this code dangerouslySetInnerHTML={{ __html: text }} */}
              <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: text }} />
              {/* for json br tag dont need h1 closing tag here and using this code dangerouslySetInnerHTML={{ __html: text }} */}
              <p className="hero-description" dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
          )
        })}

        {/* Indicator */}
        <div className="index-page-scroll-indicator"
          onClick={() => {
            const aboutSection = document.getElementById("about");
            aboutSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="index-page-scroll-indicator-arrow">Mouse</div>
        </div>
        {/* Indicator */}
      </section>
    </>
  )
}

export default Hero
