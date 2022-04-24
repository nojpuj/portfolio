import React from "react";
import "./header.css";
import CV from "./cv";
import ME from "../assets/me.png";
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

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
