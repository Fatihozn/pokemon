import React from "react";
import "./style.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="resim" />
      <div className="name">{props.children}</div>
    </div>
  );
}
