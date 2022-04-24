import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { MdOutlineSchool } from "react-icons/md";
import { useState } from "react";

const nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#exp"
        onClick={() => setActiveNav("#exp")}
        className={activeNav === "#exp" ? "active" : ""}
      >
        <BsCodeSlash />
      </a>
      <a
        href="#education"
        onClick={() => setActiveNav("#education")}
        className={activeNav === "#education" ? "active" : ""}
      >
        <MdOutlineSchool />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default nav;
