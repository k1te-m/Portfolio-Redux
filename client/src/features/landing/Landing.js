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

const MainContainer = styled.div`
  hr {
    color: #65ccb8;
  }
`;

const FooterStyled = styled.footer``;

const PortfolioSection = styled.div`
  background-color: #f2f2f2;
`;

const ContactSection = styled.div``;

const EducationSection = styled.div``;

const SkillsSection = styled.div``;

const WorkHistorySection = styled.div``;

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
        <MainContainer className="container">
          <div className="row pt-3">
            <About />
          </div>
          {/* <PortfolioSection className="row" id="portfolio">
            <Portfolio />
          </PortfolioSection>
          <hr />
          <ContactSection className="row" id="contact">
            <Contact />
          </ContactSection>
          <hr />
          <EducationSection className="row" id="education">
            <Education />
          </EducationSection>
          <hr />
          <SkillsSection className="row" id="skills">
            <Skills />
          </SkillsSection>
          <hr />
          <WorkHistorySection className="row" id="experience">
            <WorkHistory />
          </WorkHistorySection>
          <div className="row">
            <Footer />
          </div> */}
        </MainContainer>

        <Hobbies />
      </>
    );
  }
};

export default Landing;
