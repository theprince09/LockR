import React from "react";
import "./Hero.css";
import Generator from "../Generator/Generator";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* LEFT */}
        <div className="hero-left">
          <h1>
            SECURE YOUR <br />
            <span>PASSWORDS WITH LOCKR</span>
          </h1>

          <p className="hero-sub">
            Generate strong and secure passwords instantly with just one click!
          </p>

          <p className="hero-desc">
            LockR is the simplest way to generate strong passwords to keep your
            accounts safe.
          </p>

          <button className="hero-btn">TRY NOW</button>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <Generator />
        </div>
      </div>
    </section>
  );
};

export default Hero;
