import React from "react";
import About from "./About";
import BasicDet from "./BasicDet";
import Interest from "./Interest";
import Socials from "./Socials";
import "../styles/Card.css";

export default function PersonCard() {
  return (
    <div className="card">
      <BasicDet />
      <About />
      <Interest />
      <Socials />
    </div>
  );
}