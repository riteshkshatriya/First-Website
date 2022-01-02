import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import arrow from '../images/arrow.png';


// import "../../node_modules/react-slick/dist/";
// import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Heading() {
  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light  custom-navigation">
          <div className="container">
            <div className="d-flex w-100 align-items-center">
              <div className="nav-left d-flex">
                <a className="navbar-brand fw-bold text-white nav-logo" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                  <li>
                      <Link className="nav-link" to="">Home</Link>
                    </li>
                    <li>
                    <Link className="nav-link" to="/contact">Portfolio </Link>
                    </li>
                    <li>
                    <Link className="nav-link" to="/services">Services </Link>
                    </li>
                    <li>
                    <Link className="nav-link" to="/contact">Contact </Link>
                    </li>
                    {/* <a className="nav-link active" href="#">Home</a>
                    <a className="nav-link" href="#">Portfolio</a>
                    <a className="nav-link" href="#">Services</a>
                    <a className="nav-link" href="#">Contact</a> */}
                  </div>
                </div>
              </div>
              <div className="nav-right">
                <a href="#" className="common-button button-color btn">Get In Touch <img className="arrow-image" src = {arrow} alt="" /></a>
              </div>
            </div>
          </div>
        </nav>
      </div>
  );
}

