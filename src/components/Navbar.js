import React from "react";
import { Link } from "react-router-dom";
import checkAuth from "../redux/checkAuth";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Polling App
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              {<checkAuth/> ? (
                <>
                  <Link className="nav-link" to="/dashBoard">
                    DashBoard
                  </Link>
                  <Link className="nav-link" to="/adduser">
                    Add User
                  </Link>
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/">
                    LogIn
                  </Link>
                  <Link className="nav-link" to="/signUp">
                    SignUp
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
