import React, { useEffect, useState, useContext } from "react";
import "./Navbar.css";
import logo_light from "../../assets/logo-light.png";
import logo_dark from "../../assets/logo-black.png";
import toogle_light from "../../assets/night.png";
import toogle_day from "../../assets/day.png";

import en from "../../languages/en";
import hi from "../../languages/hi";
import { LanguageContext } from "../../context/LanguageContext";

const Navbar = ({ theme, setTheme }) => {
  /* 🌐 Language state (local + context sync) */
  const savedLang = localStorage.getItem("lang") || "en";
  const [lang, setLang] = useState(savedLang);

  const { changeLanguage } = useContext(LanguageContext); // 👈 ADD ONLY THIS

  /* 📱 Mobile menu state */
  const [menuOpen, setMenuOpen] = useState(false);

  /* 🌙 Theme toggle */
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  /* 🌐 Language change */
  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;

    setLang(selectedLang); // Navbar local update
    localStorage.setItem("lang", selectedLang);
    changeLanguage(selectedLang); // 👈 CONTEXT UPDATE
  };

  /* Sync on first load */
  useEffect(() => {
    changeLanguage(lang);
  }, []); // eslint-disable-line

  /* Current language text (navbar only) */
  const t = lang === "en" ? en : hi;

  return (
    <div className="navbar">
      <a href="#home">
        <img
          src={lang === "en" ? logo_light : logo_dark}
          alt="logo"
          className="logo"
        />
      </a>

      {/* 📱 Menu */}
      <ul className={menuOpen ? "open" : ""}>
        <li>{t.passphrase}</li>

        <li>{t.PIN}</li>

        <li>
          <a href="#why">{t.Why}</a>
        </li>

        <li>
          <a href="#developer">{t.about}</a>
        </li>
      </ul>

      {/* 🌐 Language Dropdown */}
      <select
        className="lang-select"
        value={lang}
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
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
