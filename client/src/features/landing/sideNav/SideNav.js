import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
    from { transfrom: scale(1); }
    50% { transform: scale(.85); }
    to { transform: scale(1);}
`;

const SideNavStyle = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style: none;
    box-shadow: none;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  li {
    flex: 1;
  }
  .list-group-item {
    background-color: transparent;
    box-shadow: none;
    border: none;
  }
  img:hover {
    animation: ${pulse} 1s infinite;
  }
  i:hover {
    animation: ${pulse} 1s infinite;
  }
  i {
    color: #f2f2f2;
    font-size: 1rem;
    padding: 0px;
    margin: 0px;
  }
`;

const SideNav = () => {
  return (
    <SideNavStyle>
      <ul className="list-group">
        <li className="list-group-item">
          <a href="https://github.com/k1te-m" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="list-group-item">
          <a
            href="https://www.linkedin.com/in/kmiller29/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="list-group-item">
          <a
            href="https://drive.google.com/file/d/1XbOSu9JYqNGkLfgajWcSbFbJs2Bp1cXr/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-file" />
          </a>
        </li>
      </ul>
    </SideNavStyle>
  );
};

export default SideNav;
