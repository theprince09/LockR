import React, { useRef } from "react";
import "./Developer.css";
import ProjectCard from "../../Components/Cards/ProjectCard";
import profile from "../../assets/Profile.png";

const Developer = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="developer" id="developer">
      <div className="developer-wrapper">
        {/* HERO */}
        <div className="developer-hero">
          <div className="dev-left">
            <h1>
              <span> Prince</span> Raj
            </h1>

            <p>
              Frontend Developer focused on building clean, secure and
              user-first web experiences.
            </p>

            {/* SOCIAL LINKS */}
            <div className="socials">
              <a href="https://github.com/theprince09" target="_blank">
                GitHub
              </a>
              <a href="https://linkedin.com/in/itsmeprince09" target="_blank">
                LinkedIn
              </a>
              <a href="https://instagram.com/the_prince.09_/" target="_blank">
                Instagram
              </a>
              <a href="https://leetcode.com/u/the_prince_09/" target="_blank">
                LeetCode
              </a>
              <a href="mailto:princeraj0509@gmail.com">Email</a>
            </div>
          </div>

          {/* PROFILE PHOTO */}
          <div className="dev-right">
            <img src={profile} alt="Prince Raj" />
          </div>
        </div>

        {/* OTHER PRODUCTS */}
        <div className="projects-section">
          <h2>Other Products</h2>

          <div className="slider-wrapper">
            <button className="nav-btn left" onClick={scrollLeft}>
              ‹
            </button>

            <div className="projects-slider" ref={sliderRef}>
              <ProjectCard
                title="Portfolio Website"
                desc="Personal portfolio built using HTML, CSS & JavaScript."
                tech="HTML • CSS • JavaScript"
                link="https://prince09.netlify.app"
              />

              <ProjectCard
                title="GameWorld"
                desc="Mini-games platform where users can play browser games."
                tech="JavaScript • CSS"
                link="https://gameworld09.netlify.app/"
              />

              <ProjectCard
                title="Gym Website"
                desc="Website to manage gym information and online presence."
                tech="HTML • CSS • JS"
                link="https://psycologiclbid.netlify.app/"
              />

              <ProjectCard
                title="UrbanEase"
                desc="Urban management system built using React."
                tech="React • API"
                link="https://urbanease09.netlify.app/"
              />

              <ProjectCard
                title="LockR"
                desc="Password, PIN & passphrase generator with strength logic."
                tech="React • JavaScript"
                link="https://lockr09.netlify.app/"
              />

              <ProjectCard
                title="DevProgress"
                desc="Developer progress tracker for GitHub & LeetCode."
                tech="React • Node • MongoDB"
                link="https://devprogress09.netlify.app/"
              />
            </div>

            <button className="nav-btn right" onClick={scrollRight}>
              ›
            </button>
          </div>

          <div className="scroll-hint">Scroll to explore more →</div>
        </div>

        {/* FOOTER */}
        <div className="developer-footer">
          Building scalable frontend systems with focus on performance & UX.
        </div>
      </div>
    </section>
  );
};

export default Developer;
