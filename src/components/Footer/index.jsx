import React from "react";
import Instagram from "../../assets/InstagramLogo.svg";
import Linkdin from "../../assets/LinkedinLogo.svg";
import "./index.css";

const index = () => {
  return (
    <div class="footer">
      <div class="footer__left">
        <ul>
          <li> Prompt Generator</li>
          <li>Dweep Daily</li>
          <li>All Contributors</li>
          <li>Your data on Dweep.io</li>
          <li>Contribute to Dweep</li>
        </ul>
      </div>
      <div class="footer__right">
        <ul>
          <li> Dweep.io</li>
          <li>Made with love in India</li>
          <li>
            <img src={Instagram} alt="" />
            <img src={Linkdin} alt="" />
          </li>
          <li>hello@dweep.io</li>
        </ul>
      </div>
    </div>
  );
};

export default index;
