import React from "react";
import "./projects.css";
import Thumbnail from "../assets/utforsk-alpene-thumbnail.png";
import Thumbnail2 from "../assets/vphoto-thumbnail.png";

const projects = () => {
  return (
    <section id="projects">
      <br />
      <h5>What can I do?</h5>
      <h2>Past Projects</h2>
      <div className="container projects__container">
        <article className="projects__item">
          <div className="projects__item-image">
            <img src={Thumbnail} alt="Utforsk Alpene" />
          </div>
          <h2>Utforsk Alpene</h2>
          <div className="projects__item-cta">
            <a
              href="https://github.com/nojpuj/utforsk-alpene"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://utforsk-alpene.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="projects__item">
          <div className="projects__item-image">
            <img src={Thumbnail2} alt="Utforsk Alpene" />
          </div>
          <h2>VPhoto (WIP)</h2>
          <div className="projects__item-cta">
            <a
              href="https://vphoto.lt/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default projects;
