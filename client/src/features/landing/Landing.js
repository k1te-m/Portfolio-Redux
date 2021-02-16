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

const FooterStyled = styled.footer``;

const PortfolioSection = styled.div`
  background-color: gainsboro;
`;

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
        <div className="container">
          <PortfolioSection className="row" id="portfolio">
            <Portfolio />
          </PortfolioSection>
          <hr />
          <div className="row" id="contact">
            <Contact />
          </div>
          <hr />
          <div className="row" id="education">
            <Education />
          </div>
          <hr />
          <div className="row" id="skills">
            <Skills />
          </div>
          <hr />
          <div className="row" id="experience">
            <WorkHistory />
          </div>
          <div className="row">
            <Footer />
          </div>
        </div>
      </>
    );
  }
};

export default Landing;
