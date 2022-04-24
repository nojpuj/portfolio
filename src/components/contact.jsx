import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";

const contact = () => {
  return (
    <section id="contact">
      <br />
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>pujanoj@gmail.com</h5>
            <a href="mailto:pujanoj@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FiTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>@nojpuj</h5>
            <a href="https://twitter.com/nojpuj" target="_blank">
              Send a DM
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Nojus Pujanauskas</h5>
            <a href="https://m.me/nojus.pujanauskas.1" target="_blank">
              Send a message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default contact;
