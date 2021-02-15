import React, { useState } from "react";
import API from "../../../utils/API";
import styled from "styled-components";
import Modal from "../../modal/Modal";
import { selectModal, TOGGLE_MODAL } from "../../modal/modalSlice";
import { useSelector, useDispatch } from "react-redux";

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
      alert("Please enter all available fields.");
    } else if (!email.match(mailformat)) {
      alert("Please enter a valid email address.");
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
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>Contact</h5>
            <form>
              <div className="form-group">
                <label for={name}>Name</label>
                <input
                  className="form-control"
                  onChange={handleInputChange}
                  name="name"
                  placeholder="Jane Smith"
                  value={name}
                />
              </div>
              <div className="form-group">
                <label for={email}>Email</label>
                <input
                  className="form-control"
                  onChange={handleInputChange}
                  name="email"
                  placeholder="Jane Smith"
                  value={email}
                />
              </div>
              <div className="form-group">
                <label for={message}>Message</label>
                <textarea
                  className="form-control"
                  onChange={handleInputChange}
                  name="message"
                  placeholder="Jane Smith"
                  value={message}
                />
              </div>
              <button
                className="btn btn-success mt-2"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Modal isOpen={modal} handleClose={() => dispatch(TOGGLE_MODAL())}>
        <div className="container">
          <div className="row">
            <div className="col-7">
              <h1>Thank you!</h1>
              <div className="row">
                <h3>Your message has been received. 😀</h3>
              </div>
            </div>
            <div className="col">
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
