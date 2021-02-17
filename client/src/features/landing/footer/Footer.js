import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const FooterStyled = styled.footer`
  width: 100vw;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterStyled className="footer font-small">
        <div className="container-fluid">
          <hr className="w-100" />
          <div className="row">
            <i className="fab fa-github" />
          </div>
          <div className="row">
            <div className="col-3">
              <div className="row">
                <HashLink to="/#portfolio">Portfolio</HashLink>
              </div>
              <div className="row">
                <HashLink to="/#contact">Contact</HashLink>
              </div>
            </div>
            <div className="col-3">
              <div className="row">
                <HashLink to="/#education">Education</HashLink>
              </div>
              <div className="row">
                <HashLink to="/#skills">Skills</HashLink>
              </div>
            </div>
            <div className="col-3">
              <div className="row">
                <HashLink to="/#experience">Experience</HashLink>
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
            </div>
            <div className="col-3">
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
    </FooterWrapper>
  );
};

export default Footer;
