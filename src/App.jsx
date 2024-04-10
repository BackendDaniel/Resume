// App.jsx

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Nav.jsx";
import Home from "./Components/Banner.jsx";
import Projects from "./Components/Projects.jsx";
import Technologies from "./Components/Technologies.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import stars from "./assets/stars.png";
import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode styles when the component mounts or when isDarkMode changes
  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div
        className={`min-h-screen ${isDarkMode ? "dark" : "light"}`}
        style={{
          backgroundImage: `url(${stars})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Navbar outside of main section */}
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

        <main className="justify-center items-center">
          <div id="banner" className="mt-20">
            <Home />
          </div>
          <div id="projects" className="mt-20">
            <Projects />
          </div>
          <div id="technologies" className="mt-20">
            <Technologies />
          </div>
          <div id="about" className="pt-5">
            <About />
          </div>
          <div id="contact" className="">
            <Contact />
          </div>
        </main>

        {/* Footer outside of main section */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
