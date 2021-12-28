import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
// import "../../node_modules/react-slick/dist/";
// import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Heading() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <button className="btn btn-primary">demo</button>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path ="/about" element={<About />}/>
          <Route path ="/users" element={<About />}/> 
          <Route path ="/" element={<Home />}/>
        </Routes>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">Features</a>
                <a className="nav-link" href="#">Pricing</a>
                <a className="nav-link disabled">Disabled</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </Router>
  );
}

function Home() {
  return <h2 className="mb-0"></h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
