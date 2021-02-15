import React from "react";
import { useSelector } from "react-redux";
import { selectPortfolio } from "../portfolio/portfolioSlice";
import styled from "styled-components";

const PortfolioContainer = styled.div``;

const StyledList = styled.ul`
  display: inline;
  list-style-type: none;
  li:not(:first-child):before {
    content: " | ";
  text-align: center;
  justify-content: center;
  overflow: hidden;
  width: 350px;
`;

const StyledListItem = styled.li`
  font-size: 10.5px;
  display: inline;
  list-style-type: none;
  overflow: hidden;
  padding: auto;
  margin: auto;
  padding-left: 0px;
  color: #3b945e;
  @media (min-width: 576px) {
    font-size: 13px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
    color: #182628;
  }
`;

const Portfolio = () => {
  const portfolio = useSelector(selectPortfolio);

  return (
    <>
      <h3>Portfolio</h3>
      {portfolio.map((repo) => (
        <div className="row mb-3">
          <div className="col-md-6">
            <a href={`https://www.github.com/${repo.github}/${repo.name}`}>
              <img src="https://via.placeholder.com/150" />
            </a>
          </div>
          <div className="col-md-6">
            <div className="row">
              <h3>{repo.name}</h3>
            </div>
            <div className="row">
              <StyledList className="list-group">
                {repo.languages.map((language) => {
                  return (
                    <StyledListItem key={language}>{language}</StyledListItem>
                  );
                })}
              </StyledList>
            </div>
            <div className="row">
              <span>{repo.description}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Portfolio;
