import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const About = () => {

  const navigate = useNavigate();

  return (
    <div className="container">
     
      <div className="container">
        <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink className="nav-link" to="#scrollspyHeading1">
                First
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#scrollspyHeading2">
                Second
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                to="/"
                role="button"
                aria-expanded="false"
              >
                Dropdown
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="#scrollspyHeading3">
                    Third
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#scrollspyHeading4">
                    Fourth
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#scrollspyHeading5">
                    Fifth
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-offset="0"
          className="scrollspy-example"
          tabindex="0"
        >
          <h4 id="scrollspyHeading1">First heading</h4>
          <p>...</p>
          <h4 id="scrollspyHeading2">Second heading</h4>
          <p>...</p>
          <h4 id="scrollspyHeading3">Third heading</h4>
          <p>...</p>
          <h4 id="scrollspyHeading4">Fourth heading</h4>
          <p>...</p>
          <h4 id="scrollspyHeading5">Fifth heading</h4>
          <p>...</p>
        </div>
      </div>
    </div>
  );
};

export default About;
