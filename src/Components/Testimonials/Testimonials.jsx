import React, { useRef } from "react";
import "./Testimonials.css";
import nextIcon from "../../assets/next-icon.png";
import backIcon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={nextIcon} alt="" className="next-btn" onClick={slideForward} />
      <img src={backIcon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Aleen</h3>
                  <span>Eduera , USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Eduera was the best decisions
                I've ever made. The support community, state-of-the-art
                facilities, and co to academic excellence have truly exceeded my
                expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Ostin Biber</h3>
                  <span>Eduera , USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Eduera was the best decisions
                I've ever made. The support community, state-of-the-art
                facilities, and co to academic excellence have truly exceeded my
                expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Ondrila</h3>
                  <span>Eduera , USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Eduera was the best decisions
                I've ever made. The support community, state-of-the-art
                facilities, and co to academic excellence have truly exceeded my
                expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Thomas</h3>
                  <span>Eduera , USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Eduera was the best decisions
                I've ever made. The support community, state-of-the-art
                facilities, and co to academic excellence have truly exceeded my
                expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
