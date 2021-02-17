import React from "react";
import styled from "styled-components";

const WorkHistorySection = styled.div`
  width: 90%;
  text-align: center;
  h1 {
    color: #f2f2f2;
    text-align: left;
  }
  .card {
    background-color: #65ccb8;
  }
  li {
    background-color: #65ccb8;
  }
  h4 {
    color: #f2f2f2;
  }
  h5 {
    color: #f2f2f2;
  }
`;

const WorkHistory = () => {
  return (
    <WorkHistorySection className="container">
      <div className="row">
        <h1>Experience</h1>
      </div>

      <div className="row">
        <h4>Northern Trust Corporation</h4>
        <h5>Chicago, IL</h5>
      </div>
      <div className="row">
        <div className="card mb-1">
          <h6 className="card-title">
            Team Leader - Institutional Fund Accounting
          </h6>

          <span className="card-subtitle">November 2017 - July 2020</span>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Direct 4-person accounting team’s daily operations for Fortune 500
              client (~$23.9 billion in market capitalization)
            </li>
            <li className="list-group-item">
              Organize the work of the team, assign tasks, monitor all
              activities, and ensure timely and accurate completion
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="card mb-1">
          <h6 className="card-title">
            Technical Coordinator - Institutional Fund Accounting
          </h6>

          <span className="card-subtitle">December 2016 - November 2017</span>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Establish that core procedures and client-specific procedures are
              followed on a daily and monthly basis
            </li>
            <li className="list-group-item">
              Serves as a key subject matter expert to clients, colleagues, and
              team members for clarity, understanding and information
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="card mb-1">
          <h6 className="card-title">
            Senior Analyst - Institutional Fund Accounting
          </h6>

          <span className="card-subtitle">December 2015 - December 2016</span>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Lead analyst on team working on large-scale, complex, and
              sensitive client relationship
            </li>
            <li className="list-group-item">
              Train partners for month-end reports and annual reporting
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="card mb-1">
          <h6 className="card-title">
            Analyst - Institutional Fund Accounting
          </h6>

          <span className="card-subtitle">December 2014 - November 2015</span>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Compute Net Asset Value (NAV) for DC/DB plans
            </li>
            <li className="list-group-item">
              Audit, research and resolve exceptions on assigned accounts
            </li>
            <li className="list-group-item">
              Analyze the impact of transactions, income positions, accruals
            </li>
          </ul>
        </div>
      </div>
    </WorkHistorySection>
  );
};

export default WorkHistory;
