import React from "react";
const Navbar = () => {
    return ( 
        <nav>
        <img className="nav--logo_icon" src="wcimage/Logo.png" />
        <div className="nav-links">
          <a className="nav-link">lives</a>
          <a className="nav-link">blog</a>
        </div>
      </nav>
    );
}
 
export default Navbar;