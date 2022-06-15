import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/learning-path">
          Geyan
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/learning-path/js">
                Sir Javascript
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/learning-path/react">
                Our love React
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/learning-path/question">
                Questions
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Home;
