import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import AnimatedNav from "./AnimatedNav";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_NAV, selectNav } from "../../landing/nav/navSlice";

const NavButton = styled(motion.button)`
  background-color: transparent;
  border: none;
  margin-top: 0.7rem;
  padding: 0px;
  :focus {
    outline: none;
  }
  i {
    font-size: 3rem;
    color: #f2f2f2;
    margin-right: 10px;
  }
`;

const NavigationContainer = styled.div`
  padding: 0px;
  height: 100%;
  width: 100%;
`;

const NavBarUL = styled.ul``;

const NavBarLI = styled(motion.li)`
  display: flex;
`;

const Nav = () => {
  const dispatch = useDispatch();
  const nav = useSelector(selectNav);

  return (
    <>
      <div>
        <NavButton
          onClick={() => dispatch(TOGGLE_NAV())}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fas fa-bars" />
        </NavButton>
      </div>
      <AnimatedNav navOpen={nav} handleClose={() => dispatch(TOGGLE_NAV())}>
        <NavigationContainer className="container">
          <NavBarUL>
            <NavBarLI
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <HashLink
                className="nav-link"
                to="/#portfolio"
                onClick={() => dispatch(TOGGLE_NAV())}
              >
                Portfolio
              </HashLink>
            </NavBarLI>
            <NavBarLI
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <HashLink
                className="nav-link"
                to="/#contact"
                onClick={() => dispatch(TOGGLE_NAV())}
              >
                Contact
              </HashLink>
            </NavBarLI>
            <NavBarLI
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <HashLink
                className="nav-link"
                to="/#education"
                onClick={() => dispatch(TOGGLE_NAV())}
              >
                Education
              </HashLink>
            </NavBarLI>
            <NavBarLI
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <HashLink
                className="nav-link"
                to="/#skills"
                onClick={() => dispatch(TOGGLE_NAV())}
              >
                Skills
              </HashLink>
            </NavBarLI>
            <NavBarLI
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <HashLink
                className="nav-link"
                to="/#experience"
                onClick={() => dispatch(TOGGLE_NAV())}
              >
                Experience
              </HashLink>
            </NavBarLI>
            <NavBarLI
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/kmiller29/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </NavBarLI>
            <NavBarLI
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                className="nav-link"
                href="https://github.com/k1te-m"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </NavBarLI>
            <NavBarLI
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                className="nav-link"
                href="https://drive.google.com/file/d/1XbOSu9JYqNGkLfgajWcSbFbJs2Bp1cXr/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </NavBarLI>
          </NavBarUL>
        </NavigationContainer>
      </AnimatedNav>
    </>
  );
};

export default Nav;
