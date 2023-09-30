import React from "react";
import "./Header.scss";
export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <a href="#">MouriThemes</a>
        </div>
        <nav>
          <a href="#">home</a>
          <a href="#">about</a>
          <a href="#">portfolio</a>
          <a href="#">services</a>
          <a href="#">contact</a>
        </nav>
      </div>
    </header>
  );
}
