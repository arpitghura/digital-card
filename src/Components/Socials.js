import React from "react";
import FacebookIcon from "../Images/Facebook Icon.png";
import GithubIcon from "../Images/GitHub Icon.png";
import InstagramIcon from "../Images/Instagram Icon.png";
import TwitterIcon from "../Images/Twitter Icon.png";

export default function Socials() {
  return (
    <div className="socials">
      <a href="https://www.twitter.com/arpitghura" className="social-icon">
        <img src={TwitterIcon} alt="Twitter" />
      </a>
      <a href="https://www.facebook.com/arpitghura.01" className="social-icon">
        <img src={FacebookIcon} alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/ghura.arpit" className="social-icon">
        <img src={InstagramIcon} alt="Instagram" />
      </a>
      <a href="https://www.github.com/arpitghura" className="social-icon">
        <img src={GithubIcon} alt="Github" />
      </a>
    </div>
  );
}