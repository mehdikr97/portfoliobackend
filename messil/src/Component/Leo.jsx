
import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Skills from './Skills';
import Work from './Work';
import { ThemeProvider } from "./ThemeContext";
function Leo() {
  return (
    <ThemeProvider>

    <div>

      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
    </ThemeProvider>

  );
}

export default Leo;
