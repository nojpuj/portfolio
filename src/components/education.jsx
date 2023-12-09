import React from "react";
import "./exp.css";
import { MdOutlineSchool } from "react-icons/md";
import { FaFlagCheckered } from "react-icons/fa";

const education = () => {
  return (
    <section id="education">
      <br />
      <h5>Where have I learned it all?</h5>
      <h2>Education & Courses</h2>

      <div className="container experience__container">
        <div className="lang">
          <h3>Education</h3>
          <div className="experience__content">
            <article className="experience__details">
              <MdOutlineSchool className="experience__details-icon" />
              <div>
                <h4>Montessori school Lyse</h4>
                <small className="text-light">Graduated 2017</small>
              </div>
            </article>
            <article className="experience__details">
              <MdOutlineSchool className="experience__details-icon" />
              <div>
                <h4>Christian Gymnasium</h4>
                <small className="text-light">Graduated 2020</small>
              </div>
            </article>
            <article className="experience__details">
              <MdOutlineSchool className="experience__details-icon" />
              <div>
                <h4>Christian Gymnasium (HS)</h4>
                <small className="text-light">Graduated 2023</small>
              </div>
            </article>
            <article className="experience__details">
              <MdOutlineSchool className="experience__details-icon" />
              <div>
                <h4>Univeristy of Oslo</h4>
                <small className="text-light">Studying IT: Robotics</small>
              </div>
            </article>
          </div>
        </div>
        <div className="prog">
          <h3>Courses</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaFlagCheckered className="experience__details-icon" />
              <div>
                <h4>Udemy</h4>
                <small className="text-light">
                  <em>Modern React with Redux</em>
                </small>
              </div>
            </article>
            <article className="experience__details">
              <FaFlagCheckered className="experience__details-icon" />
              <div>
                <h4>Khan Academy</h4>
                <small className="text-light">
                  <em>Intro to JS: Drawing & Animation</em>
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default education;
