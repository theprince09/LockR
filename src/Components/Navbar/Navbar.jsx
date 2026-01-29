import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo_light from "../../assets/logo-light.png";
import logo_dark from "../../assets/logo-black.png";
import toogle_light from "../../assets/night.png";
import toogle_day from "../../assets/day.png";

import en from "../../languages/en";
import hi from "../../languages/hi";

const Navbar = ({ theme, setTheme }) => {
  /* 🌐 Language state (from localStorage) */
  const savedLang = localStorage.getItem("lang") || "en";
  const [lang, setLang] = useState(savedLang);

  /* 📱 Mobile menu state */
  const [menuOpen, setMenuOpen] = useState(false);

  /* 🌙 Theme toggle */
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  /* 🌐 Language change */
  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    localStorage.setItem("lang", selectedLang);
  };

  /* Current language text */
  const t = lang === "en" ? en : hi;

  return (
    <div className="navbar">
      <img
        src={lang === "en" ? logo_light : logo_dark}
        alt="logo"
        className="logo"
      />

      {/* 📱 Menu */}
      <ul className={menuOpen ? "open" : ""}>
        <li>{t.generator}</li>
        <li>{t.passphrase}</li>
        <li>{t.security}</li>
        <li>{t.about}</li>
      </ul>

      {/* 🌐 Language Dropdown */}
      <select
        className="lang-select"
        value={lang}
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
        {/* future:
        <option value="fr">Français</option>
        */}
      </select>

      {/* 🌙 Theme Toggle */}
      <img
        onClick={toggle_mode}
        src={theme === "light" ? toogle_light : toogle_day}
        alt="toggle"
        className="toggle"
      />

      {/* ☰ Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </div>
  );
};

export default Navbar;
