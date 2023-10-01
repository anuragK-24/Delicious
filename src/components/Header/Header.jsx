import React from "react";
import "./Header.scss";
import deliciousLogo from "../../Icons/delicious.svg";
export default function Header() {
  return (
    <header className="Header">
      <div className="Header__Logo">
       <div className="Header__Logo__Title">Delicious</div> 
        <img className="Header__Logo__Icon" src={deliciousLogo} alt="logo" />
      </div>
      <nav>
        <ul className="Header__NavLinks">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
