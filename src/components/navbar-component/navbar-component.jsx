import React from "react";
import { Link } from "react-router-dom";
import "./navbar-component.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary p-3">
      <Link className="navbar-brand text-white" to="/">
        Caption Card
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              browse
            </Link>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link text-white" href="#">
              random
            </a>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link text-white" to="/create-caption">
              Contribute
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
