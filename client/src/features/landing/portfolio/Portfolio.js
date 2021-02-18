import React from "react";
import { useSelector } from "react-redux";
import { selectPortfolio } from "../portfolio/portfolioSlice";
import styled from "styled-components";

const PortfolioContainer = styled.div`
  text-align: center;
  h3 {
    text-align: left;
  }
  img {
    width: 350px;
    @media (min-width: 992px) {
      width: 600px;
    }
  }
`;

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
    <PortfolioContainer className="container">
      <div className="row mb-5">
        <h3>Projects</h3>
      </div>
      {portfolio.map((repo) => (
        <div className="row mb-3">
          <div className="col-md-6 my-auto">
            <div className="row">
              <h5>{repo.name}</h5>
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
          <div className="col-md-6">
            <div className="row mt-2">
              <a>
                <img src={repo.imageURL} />
              </a>
            </div>
            <div className="row mt-1 w-50 m-auto">
              <div className="col p-0">
                <a href={repo.deployedLink} target="_blank" rel="noreferrer">
                  <span>Visit</span>
                </a>
              </div>
              <div className="col p-0">
                <a
                  href={`https://www.github.com/${repo.github}/${repo.name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </PortfolioContainer>
  );
};

export default Portfolio;
