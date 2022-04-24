import React from "react";
import CV from "../assets/nojus_pujanauskas_cv.pdf";

const cv = () => {
  return (
    <div className="cv">
      <a href={CV} download className="btn btn-primary">
        Download CV
      </a>
    </div>
  );
};

export default cv;
