import React from 'react';
import BetaLogo from '../images/realbeta.gif';

function Navbar() {
    return (
        <nav class="navbar sticky-top navbar-expand-lg bg-white p-3 shadow-sm">
        <div class="container-fluid">
          
          <a class="navbar-brand" href="beta-class.com">
          <img src={BetaLogo} alt="" width="70" height="64"></img>
          BetaClass School Manager</a>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon shadow-sm p-3 mb-1 bg-success rounded"></span>
          </button>
      
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">

          <a class="nav-link" href="#why">Why BetaClass</a>
          <a class="nav-link" href="#getting started">Getting Started</a>
          <a class="nav-link" href="#pricing">Pricing</a>
          <a class="nav-link" href="#contact">Contact US</a>
          <a class="nav-link" href="#doc">Docs</a>
          <a class="nav-link" href="#support">Support</a>
          <a class="nav-link" href="#faq">FAQ</a>
      
          <button class="btn btn-danger" type="submit">Get Started for free</button>
    
    </div>
  </div>
</nav>
    )
}

export default Navbar
