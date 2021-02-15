import React from "react";
import styled from "styled-components";

const StyledJumbotron = styled.div`
  background-image: url("../images/chicago.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;
  width: 100%;
  height: 350px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Jumbotron = () => {
  return (
    <StyledJumbotron className="jumbotron">
      <div className="container">
        <h1 className="display-4">Welcome!</h1>
        <p className="lead">
          Etiam viverra, arcu rhoncus rutrum rutrum, dolor augue cursus libero,
          at egestas ante lacus id turpis. Sed at dignissim diam. Morbi
          porttitor arcu at ex tempor luctus. Donec egestas lobortis pharetra.
        </p>
      </div>
    </StyledJumbotron>
  );
};

export default Jumbotron;
