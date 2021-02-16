import React from "react";
import styled from "styled-components";
import Nav from "../nav/Nav";
import SideNav from "../sideNav/SideNav";

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

const NavContainer = styled.div`
  position: absolute;
  right: 1%;
  top: 0%;
`;

const SideNavContainer = styled.div`
  position: absolute;
  left: 1%;
  top: 0%;
`;

const Jumbotron = () => {
  return (
    <StyledJumbotron className="jumbotron jumbotron-fluid">
      <div className="container">
        <NavContainer>
          <Nav />
        </NavContainer>
        <SideNavContainer>
          <SideNav />
        </SideNavContainer>
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
