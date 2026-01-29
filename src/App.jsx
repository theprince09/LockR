import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import "./index.css";

const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      {/* HERO BACKGROUND WRAPPER */}
      <div className="hero-wrapper">
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
      </div>
    </div>
  );
};

export default App;
