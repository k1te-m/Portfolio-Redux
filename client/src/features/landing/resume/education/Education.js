import React from "react";
import styled from "styled-components";

const StyledCard = styled.div``;

const Education = () => {
  return (
    <div className="container">
      <div className="row">
        <h1>Education</h1>
      </div>
      <div className="row">
        <StyledCard className="card">
          <div className="card-body">
            <h5 className="card-title">Northwestern University</h5>
            <h6 className="card-subtitle">Chicago, IL</h6>
            <p className="card-text mb-0">Certificate - Full Stack Web Dev</p>
            <p className="card-text">September 2020 - December 2020</p>
          </div>
        </StyledCard>
      </div>
      <div className="row">
        <StyledCard className="card">
          <div className="card-body">
            <h5 className="card-title">DePaul University</h5>
            <h6 className="card-subtitle">Chicago, IL</h6>
            <p className="card-text mb-0">B.S.B. - Economics</p>
            <p className="card-text">September 2012 - August 2014</p>
          </div>
        </StyledCard>
      </div>
      <div className="row">
        <StyledCard className="card">
          <div className="card-body">
            <h5 className="card-title">College of Lake County</h5>
            <h6 className="card-subtitle">Grayslake, IL</h6>
            <p className="card-text mb-0">A.A.S. - Economics</p>
            <p className="card-text">September 2010 - May 2012</p>
          </div>
        </StyledCard>
      </div>
    </div>
  );
};

export default Education;
