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
import Footer from "./footer/Footer";
import About from "./about/About";
import Hobbies from "./about/Hobbies";
import TimeLine from "./timeline/Timeline";

const AboutContainer = styled.div`
  hr {
    color: #65ccb8;
  }
  @media (min-width: 1200px) {
    height: 80vh;
  }
`;

const ExperienceHeaderContainer = styled.div``;

const ProjectContainer = styled.div``;

const Landing = () => {
  const isPortfolioLoading = useSelector(selectPortfolioLoading);
  const dispatch = useDispatch();

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
        <AboutContainer className="container">
          <div className="row pt-3">
            <About />
          </div>
        </AboutContainer>
        <Hobbies />
        <div id="projects"></div>
        <Portfolio />
        <ExperienceHeaderContainer className="container">
          <h3 id="experience">EXPERIENCE</h3>
        </ExperienceHeaderContainer>
        <TimeLine />
        <div id="contact"></div>
        <Contact />
        <Footer />
      </>
    );
  }
};

export default Landing;
