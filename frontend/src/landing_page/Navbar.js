import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgoundColor:"#4CBB17ff"}}>
        <div class="container p-2">
          <Link class="navbar-brand" to="/">
            <img src="media/ProfitPulseLogo.jpg" alt="logo"style={{width:"20%",marginLeft:"10%"}}/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form class="d-flex" role="search">
              <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/product">
                  Product
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/pricing">
                  Pricing
                </Link>
              </li> 
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/support">
                  Support
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/support">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
            </form>
          </div>
          </div>
      </nav>
  );
}

export default Navbar;
