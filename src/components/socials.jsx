import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const socials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/nojpuj" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/nojpuj/" target="_blank">
        <BsInstagram />
      </a>
      <a href="https://www.facebook.com/nojus.pujanauskas.1/" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default socials;
