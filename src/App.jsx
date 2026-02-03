import React, { useEffect, useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Pages/About/About";
import Developer from "./Pages/Developer/Developer";
import "./index.css";

const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme || "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      {/* FIXED NAVBAR */}
      <Navbar theme={theme} setTheme={setTheme} />
      {/* LANDING PAGE */}
      <div id="home" className="hero-wrapper">
        <Hero />
      </div>
      {/* ABOUT SECTION (JUST BELOW HERO) */}
      <div id="about">
        <About />
      </div>
      <Developer></Developer>
    </div>
  );
};

export default App;
