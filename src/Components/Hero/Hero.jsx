import React from "react";
import "./Hero.css";
import darkarrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>The More You Learn, the More Opportunities you'll Have in Life</h1>
        <p>
          Our motive is to prepare and empower our students to a productive life
          that definitely impacts the economic growth of society and country.
        </p>
        <button className="btn">
          Explore more
          <img src={darkarrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
