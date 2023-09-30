import React from "react";
import "./Card.scss"
export default function Card({ title, image, description, cuisine }) {  return (
    <div className="Card">
      <div className="Card__Title">{title}</div>
      <img className="Card__Image" src={image}  alt="" />
      <div className="Card__Description">{description}</div>
      <div className="Card__Description">{cuisine}</div>
    </div>
  );
}
