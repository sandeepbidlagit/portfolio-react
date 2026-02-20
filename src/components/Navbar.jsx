import { useEffect, useState } from 'react';
import { IoCallOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import resumePDF from './resumePDF.js'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close menu on mobile
  };


  // On scroll header fixed
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className='container-fluid'>
        <div className="logo">Sandeep.</div>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          {['home', 'about', 'experience', 'work', 'contact'].map((section, index) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleScroll(e, section)}
            >
              <span className="menu-number">
                {String(index + 1).padStart(2, '0')}.&nbsp;
              </span>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        <div className='contact-detls'>
          <p> <span><IoCallOutline /></span>
            +919910352846
          </p>
          <a href={resumePDF.resume} target='_blank' rel="noopener noreferrer" className='btn'> Resume  <GoArrowRight className='icon' /> </a>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
