import React from "react";
import styled from "styled-components";
import Education from "./education/Education";
import Skills from "./skills/Skills";
import WorkHistory from "./workhistory/WorkHistory";

const Resume = () => {
  return (
    <div className="container">
      <div classname="row">
        <Education />
      </div>
      <div className="row">
        <Skills />
      </div>
      <div className="row">
        <WorkHistory />
      </div>
    </div>
  );
};

export default Resume;
