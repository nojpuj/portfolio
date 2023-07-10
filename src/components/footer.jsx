import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        NOJUS
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#exp">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/nojus.pujanauskas.1" target="_blank">
          <AiFillFacebook />
        </a>
        <a href="https://www.instagram.com/nojpuj/" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com/noisyyb" target="_blank">
          <AiOutlineTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; NOJUS PUJANAUSKAS. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
