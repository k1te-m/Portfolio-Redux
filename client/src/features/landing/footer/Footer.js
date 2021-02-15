import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer``;

const Footer = ({ scrollToPortfolio }) => {
  return (
    <FooterStyled className="footer font-small">
      <div className="container text-center">
        <hr className="w-100" />
        <div className="row">
          <i className="fab fa-github" />
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <a onClick={scrollToPortfolio}>Portfolio</a>
            </div>
            <div className="row">
              <a>Contact</a>
            </div>
            <div className="row">
              <a>Education</a>
            </div>
            <div className="row">
              <a>Skills</a>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <a>Experience</a>
            </div>
            <div className="row">
              <a
                href="https://www.linkedin.com/in/kmiller29/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="row">
              <a
                href="https://github.com/k1te-m"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="row">
              <a
                href="https://drive.google.com/file/d/1XbOSu9JYqNGkLfgajWcSbFbJs2Bp1cXr/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
