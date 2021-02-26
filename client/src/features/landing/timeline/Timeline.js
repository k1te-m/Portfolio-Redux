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
  width: 100px;
  height: 100px;
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
  font-size: 0.8rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const CardSubtitle = styled.h6`
  font-size: 0.7rem;
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ModalContainer = styled.div`
  text-align: center;
  h3 {
    font-size: 1rem;
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
    @media (min-width: 992px) {
    }
  }
  h5 {
    font-size: 0.8rem;
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
    @media (min-width: 992px) {
    }
  }
  ul {
    width: 100%;
    margin: auto;
    padding-right: 0px;
    list-style: none;
  }
  li {
    text-align: left;
    margin: auto;
    width: 50%;
    font-size: 0.7rem;
    @media (min-width: 768px) {
      font-size: 0.75rem;
    }
    @media (min-width: 992px) {
      font-size: 0.9rem;
    }
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
          <h6>Tap for more info</h6>
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
        <ModalContainer className="container">
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
              <li key="1">
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                A 12-week intensive program focused on gaining technical
                programming skills in full-stack web development
              </li>
              <li key="2">
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
              <li key="3">
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Directed 4-person accounting team’s daily operations for Fortune
                500 client ($23.9B in market capitalization).
              </li>
              <li key="4">
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Conducted performance management and career development
                processes, staffing and disciplinary actions.
              </li>
              <li key="14">
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Monitored monthly reporting for onward transmission to the
                Trustees and ensured accuracy of reports prepared for regulatory
                agencies.
              </li>
              <li key="15">
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Organized the work of the team, assigned tasks, set short-term
                priorities, monitored all activities and ensured timely and
                accurate completion of the work.
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
              <li key="5">
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Served as a resource to clients, partners, and team members for
                clarity, understanding, and information regarding the
                relationships handled by the team.
              </li>
              <li key="6">
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Carried out complex activities with significant financial,
                client, and/or internal business impact.
              </li>
              <li key="16">
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Developed process improvements or created projects that
                benefited division/department initiatives.
              </li>
              <li key="17">
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Managed daily operational activities and supervised day-to-day
                work of junior level employees
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
              <li key="18">
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Lead analyst of team that worked on large-scale, complex and
                sensitive client relationship.
              </li>
              <li key="7">
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Assisted partners with reconciliation of funds, resolution of
                exceptions, and daily processes to provide NAV reports prior to
                client deadlines.
              </li>
              <li key="8">
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Trained partners for month-end reports and annual/5500
                reporting.
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
              <li key="9">
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Determined Net Asset Value (NAV) for DC & DB plans on a daily
                basis.
              </li>
              <li key="10">
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Evaluated and reconciled funds including mutual, benchmark,
                commingled and collective for production of client month-end
                reports and annual 5500 reporting.
              </li>
              <li key="11">
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Audited and resolved exceptions on assigned accounts according
                to procedures and within scheduled time frames on a daily basis.
              </li>
              <li key="19">
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Member of the Corporate Action Team, processed corporate actions
                for accounts across the division and trained new analysts on
                procedures.
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
              <li key="12">
                <span className="fa-li">
                  <i className="far fa-check-square" />
                </span>
                Driehaus College of Business
              </li>
              <li key="13">
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
