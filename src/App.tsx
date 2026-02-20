import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Project from './components/Project';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <div className="min-h-screen bg-brand-black text-white">
        <Navbar />
        <HeroSection />
        <Project />
        <About />
        <Skills />
        <Contact />
      </div>
    </>
  )
}

export default App
