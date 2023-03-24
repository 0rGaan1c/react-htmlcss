import React from "react";
import Guy from "../../assets/guy.png";
import Form from "../Form";
import "./index.css";

const index = () => {
  return (
    <div class="header">
      <div class="header__left">
        <h1>An inspiring design delivered to your inbox every morning</h1>
        <p class="info">
          Our team scouts the internet for the best designs, illustrations and
          art and delivers a truly inspiring one every day to your inbox
        </p>
        <p class="para_bold">Show me how it looks</p>
        <Form />
      </div>
      <div class="header__right">
        <img src={Guy} alt="" />
      </div>
    </div>
  );
};

export default index;
