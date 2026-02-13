import './App.css'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'
function App() {
  return (
    <>
      <div className='dialog-off-canvas-main-canvas'>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact/>
      </div>
    </>
  )
}

export default App
