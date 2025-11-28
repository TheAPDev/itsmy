import Hero from './components/Hero';
import { useState } from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Interests from './components/Interests';
import Contact from './components/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navTabs = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#skills', label: 'Technical Skills' },
    { href: '#projects', label: 'Featured Projects' },
    { href: '#contact', label: "Let's Connect" }
  ];

  return (
    <div className="bg-black">
      {/* Responsive Top Navigation Bar */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-black via-gray-900 to-blue-950/90 backdrop-blur-lg border-b border-blue-900/40 shadow-lg">
        <div className="flex justify-center items-center py-2 px-2 md:px-0">
          {/* Desktop Navigation - perfectly centered */}
          <div className="hidden md:flex justify-center items-center gap-6">
            {navTabs.map(tab => (
              <a
                key={tab.href}
                href={tab.href}
                className="text-white text-sm font-medium px-2 py-1 rounded transition-all duration-200 hover:text-blue-400 hover:bg-blue-900/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {tab.label}
              </a>
            ))}
          </div>
          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden flex items-center text-white focus:outline-none absolute right-4 top-2 bg-gradient-to-r from-black via-gray-900 to-blue-950/90 rounded p-2 shadow-lg"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ zIndex: 60 }}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-black via-gray-900 to-blue-950/95 shadow-lg border-b border-blue-900/40 animate-fade-in">
            <div className="flex flex-col items-center gap-4 py-4">
              {navTabs.map(tab => (
                <a
                  key={tab.href}
                  href={tab.href}
                  className="text-white text-base font-medium px-4 py-2 rounded transition-all duration-200 hover:text-blue-400 hover:bg-blue-900/30 w-full text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  {tab.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* Add an id to the Hero section for Home navigation */}
      <div id="home">
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Leadership />
      <Interests />
      <Contact />
    </div>
  );
}

export default App;
