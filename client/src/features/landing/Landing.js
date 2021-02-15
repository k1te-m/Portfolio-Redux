import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Jumbotron from "../landing/jumbotron/Jumbotron";
import Portfolio from "./portfolio/Portfolio";
import Loading from "../loading/Loading";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPortfolioLoading,
  loadRepos,
} from "../landing/portfolio/portfolioSlice";
import Contact from "./contact/Contact";
import Education from "./resume/education/Education";
import Skills from "./resume/skills/Skills";
import WorkHistory from "./resume/workhistory/WorkHistory";

const FooterStyled = styled.footer``;

const PortfolioSection = styled.div`
  background-color: gainsboro;
`;

const Landing = () => {
  const isPortfolioLoading = useSelector(selectPortfolioLoading);
  const dispatch = useDispatch();

  const portfolioBegin = useRef(null);
  const contactBegin = useRef(null);
  const educationBegin = useRef(null);
  const skillsBegin = useRef(null);
  const experienceBegin = useRef(null);

  const scrollToSection = (section) => {
    section.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    dispatch(loadRepos());
  }, []);

  if (isPortfolioLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <Jumbotron />
          </div>
        </div>
        <div className="container">
          <PortfolioSection className="row" ref={portfolioBegin}>
            <Portfolio />
          </PortfolioSection>
          <hr />
          <div className="row" ref={contactBegin}>
            <Contact />
          </div>
          <hr />
          <div className="row" ref={educationBegin}>
            <Education />
          </div>
          <hr />
          <div className="row" ref={skillsBegin}>
            <Skills />
          </div>
          <hr />
          <div className="row" ref={experienceBegin}>
            <WorkHistory />
          </div>
          <div className="row">
            <FooterStyled className="footer font-small">
              <div className="container text-center">
                <hr className="w-100" />
                <div className="row">
                  <i className="fab fa-github" />
                </div>
                <div className="row">
                  <div className="col">
                    <div className="row">
                      <a onClick={() => scrollToSection(portfolioBegin)}>
                        Portfolio
                      </a>
                    </div>
                    <div className="row">
                      <a onClick={() => scrollToSection(contactBegin)}>
                        Contact
                      </a>
                    </div>
                    <div className="row">
                      <a onClick={() => scrollToSection(educationBegin)}>
                        Education
                      </a>
                    </div>
                    <div className="row">
                      <a onClick={() => scrollToSection(skillsBegin)}>Skills</a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <a onClick={() => scrollToSection(experienceBegin)}>
                        Experience
                      </a>
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
          </div>
        </div>
      </>
    );
  }
};

export default Landing;
