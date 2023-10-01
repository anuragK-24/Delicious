import React from "react";
import "./Footer.scss"; 
import github from "../../Icons/github.svg";
import linkedin from "../../Icons/linkedin.svg";
import twitter from "../../Icons/twitter.svg";  
import hashnode from "../../Icons/hashnode.svg";
import delicious from "../../Icons/delicious.svg";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={delicious} alt="Food Logo" />
          <h1>Delicious</h1>
        </div>
        <div className="footer-links">
          {/* <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul> */}
          Anurag Kumar
        </div>
        <div className="footer-social">
          <h3>Follow Me</h3>
          <ul>
            <li>
              <a href="#">
                <img src={github} alt="Github" />
              </a>
            </li>
            <li>
              <a href="#">
              <img src={hashnode} alt="Hashnode" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={linkedin} alt="Linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-info">
        <p>
          &copy; {new Date().getFullYear()} Delicious. All Rights Reserved.
        </p>
        <p> Bangalore, India</p>
      </div>
    </footer>
  );
}

export default Footer;
