import React from "react";
import styled from "styled-components";
import Nav from "../nav/Nav";
import SideNav from "../sideNav/SideNav";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_NAV, selectNav } from "../../landing/nav/navSlice";
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

// const NavContainer = styled.div`
//   position: absolute;
//   right: 1%;
//   top: 0%;
// `;

// const SideNavContainer = styled.div`
//   position: absolute;
//   left: 1%;
//   top: 0%;
// `;

// const NavigationRow = styled.div`
//   text-align: right;
// `;

// const NavColumn = styled.div``;

const Jumbotron = () => {
  const dispatch = useDispatch();
  const nav = useSelector(selectNav);

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
                <HashLink className="nav-link" to="/#portfolio">
                  Portfolio
                </HashLink>
              </li>
              <li>
                <HashLink className="nav-link" to="/#portfolio">
                  Portfolio
                </HashLink>
              </li>
              <li>
                <HashLink className="nav-link" to="/#portfolio">
                  Portfolio
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
        {/* <NavigationRow className="row">
        <div className="col-4">
          <HashLink className="nav-link" to="/#portfolio">
            Portfolio
          </HashLink>
        </div>
      </NavigationRow> */}
      </div>
    </StyledHeader>
    // <StyledJumbotron className="jumbotron jumbotron-fluid">
    //   <div className="container">
    //     <NavContainer>
    //       <Nav />
    //     </NavContainer>
    //     <SideNavContainer>
    //       <SideNav />
    //     </SideNavContainer>
    //     <div className="row">
    //       <div className="col-9">
    //         <h1 className="display-4">KEVIN MILLER</h1>
    //       </div>
    //       <NavColumn className="col-3">
    //         <div className="row">
    //           <HashLink className="nav-link" to="/#portfolio">
    //             Portfolio
    //           </HashLink>
    //         </div>
    //         <div className="row">
    //           <HashLink className="nav-link" to="/#experience">
    //             Experience
    //           </HashLink>
    //         </div>
    //         <div className="row">
    //           <HashLink className="nav-link" to="/#contact">
    //             Contact
    //           </HashLink>
    //         </div>
    //       </NavColumn>
    //     </div>
    //   </div>
    // </StyledJumbotron>
  );
};

export default Jumbotron;
