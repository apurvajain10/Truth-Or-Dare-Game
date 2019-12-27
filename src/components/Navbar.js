import React, { Component } from 'react';
import {Link} from "react-router-dom";


function Navbar() {
        return (
            <nav className="Navbar navbar-expand-lg navbar-light bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> 

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link text-white text-uppercase " to="/home">
       Welcome to the game!!!&nbsp;<i class="fas fa-home-lg-alt"></i>
          <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase"to="/rules">
          &nbsp;<i class="fas fa-home-lg-alt"></i></Link>
      </li>
      
      </ul>
    </div>
</nav>
        );
    }

export default Navbar