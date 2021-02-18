import React from "react";
import { useSelector } from "react-redux";
import { selectPortfolio } from "../portfolio/portfolioSlice";
import styled, { keyframes } from "styled-components";

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
  color: #65ccb8;
  @media (min-width: 576px) {
    font-size: 13px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const pulse = keyframes`
  from { transfrom: scale(1); }
  50% { transform: scale(.85); }
  to { transform: scale(1);}
`;

const StyledButton = styled.button`
  background-color: #65ccb8;
  border-radius: 5px;
  color: white;
  width: 76px;
  :hover {
    animation: ${pulse} 1s infinite;
  }
`;

const Portfolio = () => {
  const portfolio = useSelector(selectPortfolio);

  return (
    <PortfolioContainer className="container">
      <div className="row mb-5">
        <h3>PROJECTS</h3>
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
                  <StyledButton className="btn">Visit</StyledButton>
                </a>
              </div>
              <div className="col p-0">
                <a
                  href={`https://www.github.com/${repo.github}/${repo.name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <StyledButton className="btn">GitHub</StyledButton>
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
