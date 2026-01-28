import React from "react";
import "./Navbar.css";
import logo_light from "../../assets/logo-light.png";
import logo_dark from "../../assets/logo-black.png";
import toogle_light from "../../assets/night.png";
import toogle_day from "../../assets/day.png";
const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="navbar">
      <img
        src={theme == "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      />
      <ul>
        <li>Generator</li>
        <li>Passpharase</li>
        <li>Security</li>
        <li>About</li>
      </ul>
      <img
        onClick={() => toggle_mode()}
        src={theme == "light" ? toogle_light : toogle_day}
        alt=""
        className="toggle"
      />
    </div>
  );
};

export default Navbar;
