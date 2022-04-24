import React from "react";
import "./about.css";
import ME from "../assets/me-about.jpeg";

const about = () => {
  return (
    <section id="about">
      <br />
      <h5>Get To Know</h5>
      <h2>Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <p>
            I'm an ambitious and passionate 17-year-old coder, skater, gamer,
            alpine-skier and basketball player. Because of my long time gaming
            career, I know quite a lot about computers. Not only coding them,
            but also building them and setting them up. Get in touch with me
            from the contacts section!
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
