import React from "react";
import NavBar from "./NavBar";
import "../components/Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <NavBar></NavBar>

      <body>
        <div className="d-flex justify-content-center">
          <div className="error-page">
            <div className="content">
              <h1 data-text="404">404</h1>
              <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident reprehenderit magni accusamus voluptatum eveniet id,
                inventore ut beatae quasi sapiente.
              </p>
              <div className="btns">
                <Link to="/home">Return Home</Link>
                <Link to="/error">Report Problem</Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Error;
