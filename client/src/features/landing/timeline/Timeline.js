import React from "react";
import { Chrono } from "react-chrono";
import styled from "styled-components";
import { timelineData } from "./timelineData";
import Modal from "../../modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import {
  TOGGLE_NW,
  TOGGLE_TL,
  TOGGLE_TC,
  TOGGLE_SA,
  TOGGLE_A,
  TOGGLE_DPU,
  TOGGLE_CLC,
  selectTimelineModal,
} from "./timelineModal/timelineModalSlice";

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

const CardTitle = styled.h5``;

const CardSubtitle = styled.h6``;

const ModalContainer = styled.div`
  ul {
    margin: auto;
    list-style: none;
  }
  li {
    margin: auto;
    width: 60%;
  }
`;

const TimeLine = () => {
  const items = timelineData;
  const dispatch = useDispatch();
  const modal = useSelector(selectTimelineModal);

  const { northwestern, tl, tc, sa, a, dpu, clc } = modal;

  return (
    <>
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
            <CardContainer onClick={() => dispatch(TOGGLE_NW())}>
              <div className="row">
                <CardTitle>Certificate</CardTitle>
              </div>
              <div className="row">
                <CardSubtitle>Full-stack Web Development</CardSubtitle>
              </div>
              <div className="row">
                <CardTitle>Northwestern University</CardTitle>
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
            <CardContainer onClick={() => dispatch(TOGGLE_TL())}>
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
            <CardContainer onClick={() => dispatch(TOGGLE_TC())}>
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
            <CardContainer onClick={() => dispatch(TOGGLE_SA())}>
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
            <CardContainer onClick={() => dispatch(TOGGLE_A())}>
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
            <CardContainer onClick={() => dispatch(TOGGLE_DPU())}>
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
            <CardContainer onClick={() => dispatch(TOGGLE_CLC())}>
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
      <Modal isOpen={northwestern} handleClose={() => dispatch(TOGGLE_NW())}>
        <ModalContainer className="container" style={{ textAlign: "center" }}>
          <div className="row">
            <h3>Certificate</h3>
          </div>
          <div className="row">
            <h5>Full-stack Web Development</h5>
          </div>
          <div className="row">
            <h5>Northwestern University - Chicago, IL</h5>
          </div>
          <div className="row">
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                A 12-week intensive program focused on gaining technical
                programming skills in full-stack web development
              </li>
              <li>
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Areas covered: HTML5, CSS3, JavaScript, jQuery, Bootstrap,
                NodeJS, MySQL, MongoDB, Express, and ReactJS
              </li>
            </ul>
          </div>
          <div className="row mt-2 mb-0">
            <ImageWrapper>
              <ImageStyle src="../images/NW-Seal.png" />
            </ImageWrapper>
          </div>
        </ModalContainer>
      </Modal>
      <Modal isOpen={tl} handleClose={() => dispatch(TOGGLE_TL())}>
        <ModalContainer className="container" style={{ textAlign: "center" }}>
          <div className="row">
            <h3>Team Leader</h3>
          </div>
          <div className="row">
            <h5>Unitized Valuations and Reporting Services</h5>
          </div>
          <div className="row">
            <h5>Northern Trust Corporation - Chicago, IL</h5>
          </div>
          <div className="row">
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Direct 4-person accounting team’s daily operations for Fortune
                500 client ($23.9B in market capitalization)
              </li>
              <li>
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Organize the work of the team, assign tasks, monitor all
                activities, and ensure timely and accurate completion
              </li>
            </ul>
          </div>
          <div className="row mt-2 mb-0">
            <ImageWrapper>
              <ImageStyle src="../images/NT-logo.png" />
            </ImageWrapper>
          </div>
        </ModalContainer>
      </Modal>
      <Modal isOpen={tc} handleClose={() => dispatch(TOGGLE_TC())}>
        <ModalContainer className="container" style={{ textAlign: "center" }}>
          <div className="row">
            <h3>Technical Coordinator</h3>
          </div>
          <div className="row">
            <h5>Unitized Valuations and Reporting Services</h5>
          </div>
          <div className="row">
            <h5>Northern Trust Corporation - Chicago, IL</h5>
          </div>
          <div className="row">
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Establish that core procedures and client-specific procedures
                are followed on a daily and monthly basis
              </li>
              <li>
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Serves as a key subject matter expert to clients, colleagues,
                and team members for clarity, understanding and information
              </li>
            </ul>
          </div>
          <div className="row mt-2 mb-0">
            <ImageWrapper>
              <ImageStyle src="../images/NT-logo.png" />
            </ImageWrapper>
          </div>
        </ModalContainer>
      </Modal>
      <Modal isOpen={sa} handleClose={() => dispatch(TOGGLE_SA())}>
        <ModalContainer className="container" style={{ textAlign: "center" }}>
          <div className="row">
            <h3>Senior Analyst</h3>
          </div>
          <div className="row">
            <h5>Unitized Valuations and Reporting Services</h5>
          </div>
          <div className="row">
            <h5>Northern Trust Corporation - Chicago, IL</h5>
          </div>
          <div className="row">
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Assist partners with reconciliation of funds, resolution of
                exceptions, and daily processes to provide NAV reports prior to
                client deadlines
              </li>
              <li>
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Lead analyst of team working on large-scale, complex and
                sensitive client relationship
              </li>
            </ul>
          </div>
          <div className="row mt-2 mb-0">
            <ImageWrapper>
              <ImageStyle src="../images/NT-logo.png" />
            </ImageWrapper>
          </div>
        </ModalContainer>
      </Modal>
      <Modal isOpen={a} handleClose={() => dispatch(TOGGLE_A())}>
        <ModalContainer className="container" style={{ textAlign: "center" }}>
          <div className="row">
            <h3>Analyst</h3>
          </div>
          <div className="row">
            <h5>Unitized Valuations and Reporting Services</h5>
          </div>
          <div className="row">
            <h5>Northern Trust Corporation - Chicago, IL</h5>
          </div>
          <div className="row">
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Compute Net Asset Value (NAV) for DC/DB plans
              </li>
              <li>
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Audit, research and resolve exceptions on assigned accounts
              </li>
              <li>
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Analyze the impact of transactions, income positions, accruals
              </li>
            </ul>
          </div>
          <div className="row mt-2 mb-0">
            <ImageWrapper>
              <ImageStyle src="../images/NT-logo.png" />
            </ImageWrapper>
          </div>
        </ModalContainer>
      </Modal>
      <Modal isOpen={dpu} handleClose={() => dispatch(TOGGLE_DPU())}>
        <ModalContainer className="container" style={{ textAlign: "center" }}>
          <div className="row">
            <h3>Bachelor of Science in Business</h3>
          </div>
          <div className="row">
            <h5>Economics</h5>
          </div>
          <div className="row">
            <h5>DePaul University - Chicago, IL</h5>
          </div>
          <div className="row">
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Driehaus College of Business
              </li>
              <li>
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                3.513 GPA
              </li>
            </ul>
          </div>
          <div className="row mt-2 mb-0">
            <ImageWrapper>
              <ImageStyle src="../images/DePaul-Logo.png" />
            </ImageWrapper>
          </div>
        </ModalContainer>
      </Modal>
      <Modal isOpen={clc} handleClose={() => dispatch(TOGGLE_CLC())}>
        <ModalContainer className="container" style={{ textAlign: "center" }}>
          <div className="row">
            <h3>Associate of Applied Science</h3>
          </div>
          <div className="row">
            <h5>Economics</h5>
          </div>
          <div className="row">
            <h5>College of Lake County - Grayslake, IL</h5>
          </div>
          <div className="row mt-2 mb-0">
            <ImageWrapper>
              <ImageStyle src="../images/clc-logo.png" />
            </ImageWrapper>
          </div>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default TimeLine;
