import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="container text-center py-5">
            <img
              src="../Images/help-center-customer-carem.png"
              height="100px"
              width="100px"
              className="img-fluid "
            />
          </div>
          <div className="row">
            <p className="fw-bold lh-2">Fortmart is concerned about feedback and customer service. we always want to serve you better. You can reach us via our office address,email and phone number.You can also drop your complains,questions and comment in the comment box. We will reply you swiftly via email.</p>
          </div>
          <div className="row">
            <div className="d-flex  align-content-center">
              <h3 className="me-1">Office Address:</h3>
              <p className="mt-1 lead"> No 14 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua</p>
            </div>
            <div className="d-flex  align-items-center">
              <h3 className="me-1">Phone:</h3>
              <p className="mt-1 lead">+2348069688771</p>
            </div>
            <div className="d-flex  align-content-center">
              <h3 className="me-1">Email:</h3>
              <p className="mt-1 lead "> Fortmart@email</p>
            </div>
            
          </div>
          <div className="row">
            <div className="mb-3">
              <label htmlFor="contactFormControlInput1" class="form-label fw-bold">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="contactFormControlInput1"
                placeholder="name@contact.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contactFormControlTextarea1" class="form-label fw-bold">
                Write us your complain
              </label>
              <textarea
                className="form-control"
                id="contactFormControlTextarea1"
                rows="3"
              ></textarea>
            </div> 
            <button className="btn btn-warning w-100 mx-3 my-4 text-light fw-bold">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
