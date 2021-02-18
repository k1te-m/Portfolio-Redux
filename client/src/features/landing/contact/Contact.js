import React, { useState } from "react";
import API from "../../../utils/API";
import styled from "styled-components";
import Modal from "../../modal/Modal";
import { selectModal, TOGGLE_MODAL } from "../../modal/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import { SET_ALERT } from "../../alert/alertSlice";

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  img {
    height: 85px;
    width: 85px;
    border-radius: 50%;
    border: 1px solid #3b945e;
    @media screen and (min-width: 576px) {
      height: 125px;
      width: 125px;
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 992px) {
    }
    @media screen and (min-width: 1200px) {
    }
  }
`;

const ContactSection = styled.div`
  text-align: center;
  .form-group {
    text-align: left;
  }
  h3 {
    text-align: left;
  }
  input {
    background-color: white;
  }
  textarea {
    background-color: white;
  }
  button {
    background-color: #65ccb8;
  }
`;

const Contact = () => {
  const modal = useSelector(selectModal);
  const dispatch = useDispatch();

  const [messageObject, setMessageObject] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = messageObject;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMessageObject({ ...messageObject, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const mailformat = /.+@.+\..+/;
    if (name === "" || email === "" || message === "") {
      dispatch(
        SET_ALERT({
          message: "Please enter all available fields.",
          type: "danger",
        })
      );
    } else if (!email.match(mailformat)) {
      dispatch(
        SET_ALERT({
          message: "Please enter a valid email address.",
          type: "danger",
        })
      );
    } else {
      API.sendMessage({
        name: messageObject.name,
        email: messageObject.email,
        message: messageObject.message,
      })
        .then((res) => {
          if (res.status === 200) {
            setMessageObject({
              ...messageObject,
              name: "",
              email: "",
              message: "",
            });
            dispatch(TOGGLE_MODAL());
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <ContactSection className="container">
        <div className="row">
          <div className="col">
            <h3>Contact</h3>
            <form>
              <div className="form-group">
                <label htmlFor={name}>Name</label>
                <input
                  className="form-control"
                  onChange={handleInputChange}
                  name="name"
                  placeholder="Jane Smith"
                  value={name}
                />
              </div>
              <div className="form-group">
                <label htmlFor={email}>Email</label>
                <input
                  className="form-control"
                  onChange={handleInputChange}
                  name="email"
                  placeholder="Jane Smith"
                  value={email}
                />
              </div>
              <div className="form-group">
                <label htmlFor={message}>Message</label>
                <textarea
                  className="form-control"
                  onChange={handleInputChange}
                  name="message"
                  placeholder="Jane Smith"
                  value={message}
                />
              </div>
              <button className="btn mt-2" onClick={handleFormSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </ContactSection>
      <Modal isOpen={modal} handleClose={() => dispatch(TOGGLE_MODAL())}>
        <div className="container">
          <div className="row">
            <div className="col-7">
              <h1>Thank you!</h1>
              <div className="row">
                <h3>Your message has been received. 😀</h3>
              </div>
            </div>
            <div className="col-5">
              <ImgContainer>
                <img src="../images/cooper1.jpg" alt="Cooper" />
              </ImgContainer>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Contact;
