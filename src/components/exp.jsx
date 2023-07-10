import React from "react";
import "./education.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const exp = () => {
  return (
    <section id="exp">
      <br />
      <h5>What Can I Do?</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="lang">
          <h3>Languages/Frameworks</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline className="experience__details-icon" />
              <div>
                <h4>Svelte</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="prog">
          <h3>Experience With</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline className="experience__details-icon" />
              <div>
                <h4>VS Code</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline className="experience__details-icon" />
              <div>
                <h4>Github</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline className="experience__details-icon" />
              <div>
                <h4>Wix</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline className="experience__details-icon" />
              <div>
                <h4>Wordpress</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline className="experience__details-icon" />
              <div>
                <h4>Semantic UI</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default exp;
