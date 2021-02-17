import React from "react";
import styled from "styled-components";

const SkillsSection = styled.div`
  width: 90%;
  text-align: center;
  h1 {
    text-align: left;
    color: #f2f2f2;
  }
  .card {
    background-color: #57ba98;
  }
  li {
    background-color: #57ba98;
  }
`;

const Skills = () => {
  return (
    <SkillsSection className="container">
      <div className="row">
        <h1>Skills</h1>
      </div>
      <div className="row">
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">HTML / CSS / Bootstrap</li>
            <li className="list-group-item">JavaScript / jQuery / Node.js</li>
            <li className="list-group-item">
              MySQL / MongoDB / Express / Jest
            </li>
            <li className="list-group-item">Git / React.js / Redux.js</li>
            <li className="list-group-item">
              React-Redux.js / ReduxToolkit.js
            </li>
            <li className="list-group-item">Proficient with MERN stack</li>
            <li className="list-group-item">
              Excellent written & verbal communication skills
            </li>
          </ul>
        </div>
      </div>
    </SkillsSection>
  );
};

export default Skills;
