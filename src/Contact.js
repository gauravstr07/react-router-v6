import React from "react";
import NavBar from "./components/NavBar";


const Contact = () => {
  return (
    <>
    <NavBar></NavBar>
    <div className="container">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button type="button" className="btn btn-dark mb-4">
          Dark
        </button>
      </div>
      <h1>Welcome to contact app..</h1>
    </div>
    </>
  );
};


export default Contact;
