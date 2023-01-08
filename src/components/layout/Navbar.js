import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-primary ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" exact to="/">
            Users
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link>
            <Link className="btn btn-primary bg-success mr-2" exact to="users/adduser">Add User</Link>
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

/* Important Notes
/**
 * Home prr by default active behavior lga hua hai ,hum isko remove krr sakte hai by using 
 * react router ke navigation  se 
 * 
 */
