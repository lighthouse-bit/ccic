import React from "react";
import "./PartCollab.css"
import logo from "../Assests/logo2.png"

const PartCollab = () => {
    const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  return (
    <section className="slider-container">
      <div className="slider-content">
        <div className="slider-arrow left-arrow" onClick={scrollLeft}>
          &#10094;
        </div>
        <div className="slider-wrapper" ref={scrollRef}>
          <div className="slider-item">
            <img src={logo} alt="Partner 1" />
          </div>
          <div className="slider-item">
            <img src={logo} alt="Partner 2" />
          </div>
          <div className="slider-item">
            <img src={logo} alt="Partner 3" />
          </div>
          <div className="slider-item">
            <img src={logo} alt="Partner 4" />
          </div>
          <div className="slider-item">
            <img src={logo} alt="Partner 5" />
          </div>
        </div>
        <div className="slider-arrow right-arrow" onClick={scrollRight}>
          &#10095;
        </div>
      </div>
    </section>
  );
}

export default PartCollab;