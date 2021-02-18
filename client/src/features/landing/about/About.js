import React from "react";
import styled from "styled-components";

const ImageStyled = styled.img`
  width: 425px;
  display: block;
  margin: auto;
  object-fit: fill;
  @media (min-width: 768px) {
    width: 275px;
  }
  @media (min-width: 992px) {
    width: 360px;
  }
`;

const AboutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  img {
    margin: 0px;
    padding: 0px;
  }
`;

const About = () => {
  return (
    <>
      <AboutSection>
        <div className="col-md-7">
          <div className="row">
            <h3>Welcome! I am Kevin Miller, a full-stack developer.</h3>
          </div>
          <div className="row">
            <p>
              Prior to being a developer, I worked as a financial analyst, and
              later as a manager, providing daily pension fund valuations and
              various reporting services for a Fortune 500 client with nearly
              $24B in market capitalization. Beginning in 2019, my team was
              tasked to work hand in hand with a small group of developers to
              create tools to manage workflow and automate processes. I was
              captivated by the development process and eager to learn more.
            </p>
            <p>
              It was during this time that I began taking some self-paced
              courses and researching the available paths to become a developer.
              And while my position offered financial security and comfort, it
              was not challenging or inspiring me in the same ways programming
              and development were. So in July of 2020, I left my position to
              focus entirely on growing my programming skills. Including a 12
              week intensive program at Northwestern University where I
              graduated in December of 2020.
            </p>
            <p>
              My passion for development has only continued to grow since
              graduating as I have begun to dive into new languages and
              libraries. The challenge that coding provides and that feeling of
              bringing it all together inspires me each morning to keep going. I
              look forward to bringing that passion and love of learning as a
              junior developer.
            </p>
          </div>
          <div className="row">
            <h3>Front-End</h3>
          </div>
          <div className="row">
            <span>
              JavaScript • ReactJS • Redux • ReduxToolKit • HTML5 • CSS3 •
              TypeScript • jQuery • Bootstrap
            </span>
          </div>

          <div className="row mt-3">
            <h3>Back-End</h3>
          </div>
          <div className="row mb-3">
            <span>NodeJS • MySQL • MongoDB • Express</span>
          </div>
        </div>
        <div className="col-md-5">
          <ImageStyled src="../images/me3.jpg" alt="Kevin" />
        </div>
      </AboutSection>
    </>
  );
};

export default About;
