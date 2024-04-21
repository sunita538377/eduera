import React from "react";
import "./About.css";
import aboutImg from "../../assets/about.png";
import playIcon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="aboutLeft">
        <img src={aboutImg} alt="" className="aboutImg" />
        <img
          src={playIcon}
          alt=""
          className="PlayIcon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="aboutRight">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Empowering Young Minds Today For a Brighter Leadership Tomorrow</h2>
        <p>
          Our University stands as a beacon of higher learning, dedicated to
          fostering intellectual curiosity, academic excellence, and personal
          growth. our university boasts a vibrant campus community enriched by
          diversity in culture, thought, and background.{" "}
        </p>
        <p>
          With a commitment to innovation and a tradition of scholarly
          achievement, Our University offers a comprehensive range of
          undergraduate, graduate, and professional programs across various
          disciplines.
        </p>
        <p>
          Our world-class faculty members are not only esteemed scholars but
          also dedicated mentors, guiding students on their educational journey
          and encouraging them to pursue their passions.
        </p>
      </div>
    </div>
  );
};

export default About;
