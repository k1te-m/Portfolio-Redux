import React from "react";
import styled, { keyframes } from "styled-components";
import { HashLink } from "react-router-hash-link";

const pulse = keyframes`
  from { transfrom: scale(1); }
  50% { transform: scale(.85); }
  to { transform: scale(1);}
`;

const FooterWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: #65ccb8;
  align-items: center;
  height: 128px;

  i {
    font-size: 4rem;
    color: white;
  }
  i:hover {
    animation: ${pulse} 1s infinite;
  }
  a {
    width: 150px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper className="container-fluid mt-4 p-2">
      <div className="row row-cols-3">
        <a href="https://github.com/k1te-m" target="_blank" rel="noreferrer">
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/kmiller29/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin" />
        </a>
        <a
          href="https://drive.google.com/file/d/1XbOSu9JYqNGkLfgajWcSbFbJs2Bp1cXr/view"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fas fa-file" />
        </a>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
