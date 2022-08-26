import React from "react";
import "./header.css";
import CV from "./cv";
import ME from "../assets/me.jpg";
import Socials from "./socials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nojus Pujanauskas</h1>
        <h5 className="text-candy">Front-End Developer</h5>
        <CV />
        <Socials />

        <img className="me-image" src={ME} alt="me" />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
