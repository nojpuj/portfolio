import React from "react";
import CV from "../assets/cv.docx";

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
