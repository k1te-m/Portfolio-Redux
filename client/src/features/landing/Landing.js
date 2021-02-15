import React, { useEffect } from "react";
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
      <div className="container-fluid">
        <div className="row">
          <Jumbotron />
        </div>
        <div className="row">
          <Portfolio />
        </div>
        <div className="row">
          <Contact />
        </div>
      </div>
    );
  }
};

export default Landing;
