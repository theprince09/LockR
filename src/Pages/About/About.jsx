import React, { useContext } from "react";
import "./About.css";
import { LanguageContext } from "../../context/LanguageContext";

const About = () => {
  const { t } = useContext(LanguageContext); // 👈 CORRECT
  const data = t.aboutPage; // 👈 CORRECT

  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        {/* HERO */}
        <div className="about-hero fade-in">
          <h1>
            {data.title} <span>LockR</span>
          </h1>
          <p>{data.subtitle}</p>
        </div>

        {/* WHY LOCKR */}
        <div className="about-section fade-in">
          <h2>{data.whyTitle}</h2>

          <div className="about-cards">
            {data.whyCards.map((card, index) => (
              <div className="about-card" key={index}>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PROBLEM */}
        <div className="about-section highlight fade-in">
          <h2>{data.problemTitle}</h2>
          <p>{data.problemDesc}</p>
        </div>

        {/* SOLUTION */}
        <div className="about-section fade-in">
          <h2>{data.solutionTitle}</h2>
          <ul className="about-list">
            {data.solutionPoints.map((point, index) => (
              <li key={index}>✔ {point}</li>
            ))}
          </ul>
        </div>

        {/* FOOTER */}
        <div className="about-footer fade-in">
          <p>{data.footer}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
