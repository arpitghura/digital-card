import React from "react";
import emailIcon from "../Images/Mail.png";
import linkedinIcon from "../Images/linkedin.png";

export default function BasicDet() {
  return (
    <div>
      <div className="det--person_image"></div>
      <h1 className="det--person_name">Arpit Ghura</h1>
      <h3 className="det--person_role">Front-End Developer</h3>
      <a href="https://www.arpitghura.me" className="det--person_web">
        www.arpitghura.me
      </a>
      <div className="det--btn_group">
        <a href="mailto:ghurarpit110@gmail.com" className="det--email_btn">
          <span>
            <img src={emailIcon} alt="mail-icon" />
          </span>{" "}
          Email
        </a>
        <a
          href="https://linkedin.com/in/arpitghura"
          className="det--linkedin_btn"
        >
          <span>
            <img src={linkedinIcon} alt="mail-icon" />
          </span>{" "}
          Linkedin
        </a>
      </div>
    </div>
  );
}