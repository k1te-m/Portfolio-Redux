import React from "react";
import styled from "styled-components";

const HobbiesStyled = styled.div`
  text-align: center;
  height: auto;
  background-color: #65ccb8;
  color: white;
  i {
    font-size: 2rem;
  }
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    width: auto;
    margin: auto;
  }
  li {
    display: block;
    flex: 1;
  }
`;

const Hobbies = () => {
  return (
    <HobbiesStyled className="container-fluid">
      <div className="row pb-2">
        <h3>In my spare time, you can find me...</h3>
      </div>
      <div className="row">
        <ul>
          <li key="game">
            <div className="row">
              <i className="fas fa-crosshairs" />
            </div>
            <div className="row">
              <span>Playing a competetive video game.</span>
            </div>
          </li>
          <li key="read">
            <div className="row">
              <i className="fas fa-book-reader" />
            </div>
            <div className="row">
              <span>Reading a book.</span>
            </div>
          </li>
          <li key="sports">
            <div className="row">
              <i className="fas fa-baseball-ball" />
            </div>
            <div className="row">
              <span>Reading about or watching sports.</span>
            </div>
          </li>
        </ul>
      </div>
    </HobbiesStyled>
  );
};

export default Hobbies;
