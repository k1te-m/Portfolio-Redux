import React from "react";
import { Chrono } from "react-chrono";
import styled from "styled-components";
import { timelineData } from "./timelineData";

const TimeLineWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #65ccb8;
`;

const TimelineStyle = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 992px) {
    width: 35%;
  }
  text-align: center;
  i {
    color: #182628;
    font-size: 0.75rem;
  }
`;

const ImageWrapper = styled.div`
  width: 125px;
  height: 125px;
  margin: auto;
`;

const ImageStyle = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const CardContainer = styled.div`
  text-align: center;
`;

const CardTitle = styled.h5`
  font-size: 0.85rem;
`;

const CardSubtitle = styled.p`
  font-size: 0.75rem;
`;

const TimeLine = () => {
  const items = timelineData;

  return (
    <TimeLineWrapper>
      <TimelineStyle>
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          theme={{ primary: "white", secondary: "#182628" }}
          hideControls
        >
          <div className="chrono-icons">
            <i className="fas fa-code" />
            <i className="fas fa-piggy-bank" />
            <i className="fas fa-piggy-bank" />
            <i className="fas fa-piggy-bank" />
            <i className="fas fa-piggy-bank" />
            <i className="fas fa-university" />
            <i className="fas fa-university" />
          </div>
          <CardContainer>
            <div className="row">
              <CardTitle>Certificate</CardTitle>
            </div>
            <div className="row">
              <CardTitle>Full-stack Web Development</CardTitle>
            </div>
            <div className="row">
              <ImageWrapper>
                <ImageStyle
                  src="../images/NW-Seal.png"
                  alt="Northwestern University"
                />
              </ImageWrapper>
            </div>
          </CardContainer>
          <CardContainer>
            <div className="row">
              <CardTitle>Team Leader</CardTitle>
            </div>
            <div className="row">
              <CardTitle>Northern Trust Corporation</CardTitle>
            </div>
            <div className="row">
              <ImageWrapper>
                <ImageStyle
                  src="../images/NT-logo.png"
                  alt="Northwestern University"
                />
              </ImageWrapper>
            </div>
          </CardContainer>
          <CardContainer>
            <div className="row">
              <CardTitle>Technical Coordinator</CardTitle>
            </div>
            <div className="row">
              <CardTitle>Northern Trust Corporation</CardTitle>
            </div>
            <div className="row">
              <ImageWrapper>
                <ImageStyle
                  src="../images/NT-logo.png"
                  alt="Northwestern University"
                />
              </ImageWrapper>
            </div>
          </CardContainer>
          <CardContainer>
            <div className="row">
              <CardTitle>Senior Analyst</CardTitle>
            </div>
            <div className="row">
              <CardTitle>Northern Trust Corporation</CardTitle>
            </div>
            <div className="row">
              <ImageWrapper>
                <ImageStyle
                  src="../images/NT-logo.png"
                  alt="Northwestern University"
                />
              </ImageWrapper>
            </div>
          </CardContainer>
          <CardContainer>
            <div className="row">
              <CardTitle>Analyst</CardTitle>
            </div>
            <div className="row">
              <CardTitle>Northern Trust Corporation</CardTitle>
            </div>
            <div className="row">
              <ImageWrapper>
                <ImageStyle
                  src="../images/NT-logo.png"
                  alt="Northwestern University"
                />
              </ImageWrapper>
            </div>
          </CardContainer>
          <CardContainer>
            <div className="row">
              <CardTitle>Bachelor of Science in Business</CardTitle>
            </div>
            <div className="row">
              <CardSubtitle>Economics</CardSubtitle>
            </div>
            <div className="row">
              <CardTitle>DePaul University</CardTitle>
            </div>
            <div className="row">
              <ImageWrapper>
                <ImageStyle
                  src="../images/DePaul-Logo.png"
                  alt="Northwestern University"
                />
              </ImageWrapper>
            </div>
          </CardContainer>
          <CardContainer>
            <div className="row">
              <CardTitle>Associate of Applied Science</CardTitle>
            </div>
            <div className="row">
              <CardSubtitle>Economics</CardSubtitle>
            </div>
            <div className="row">
              <CardTitle>College of Lake County</CardTitle>
            </div>
            <div className="row">
              <ImageWrapper>
                <ImageStyle
                  src="../images/clc-logo.png"
                  alt="Northwestern University"
                />
              </ImageWrapper>
            </div>
          </CardContainer>
        </Chrono>
      </TimelineStyle>
    </TimeLineWrapper>
  );
};

export default TimeLine;
