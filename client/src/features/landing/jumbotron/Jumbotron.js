import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
  background-color: #65ccb8;
  height: 140px;
  a {
    text-decoration: none;
    margin: auto;
    padding: auto;
    color: #f2f2f2;
  }
  .nav-link {
    padding: 0.25rem;
    font-size: 1.3rem;
  }
  display: flex;
  align-items: center;
  h1 {
    font-size: 48px;
  }
  ul {
    padding: auto;
    margin: auto;
    text-align: right;
    li {
      list-style: none;
      text-align: right;
    }
  }
  .header {
    @media (min-width: 992px) {
      width: 80%;
    }
  }
`;

const Jumbotron = () => {
  return (
    <StyledHeader className="container-fluid">
      <div className="container-fluid p-0 header">
        <div className="row">
          <div className="col-6">
            <h1>
              <Link to="/" className="navBrand my-auto">
                KEVIN MILLER
              </Link>
            </h1>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <HashLink className="nav-link" to="/#projects">
                  PROJECTS
                </HashLink>
              </li>
              <li>
                <HashLink className="nav-link" to="/#experience">
                  EXPERIENCE
                </HashLink>
              </li>
              <li>
                <HashLink className="nav-link" to="/#contact">
                  CONTACT
                </HashLink>
              </li>
              <li>
                <a
                  className="nav-link"
                  href="https://drive.google.com/file/d/1XbOSu9JYqNGkLfgajWcSbFbJs2Bp1cXr/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  RESUME
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Jumbotron;
