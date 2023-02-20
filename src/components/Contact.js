import React from "react";

function Contact(props) {
  return (
    <div class="div3">
      <div class="left">
        <h3>Contact Me</h3>
      </div>
      <div class="contacts-links" id="Contact Me">
        <a href="#777-777-777">
          <i
            class="fa fa-phone"
            style={{
              fontSize: "48px",
              color: "black",
              // "font-size:48px;color:black"
            }}
          ></i>
        </a>
        <a href="mailto:hannahkchung88@gmail.com">
          <i
            class="fa fa-envelope"
            style={{
              fontSize: "48px",
              color: "green",
              // "font-size:48px;color:black"
            }}
          ></i>
        </a>
        <a href="#https://github.com/hannybear88">
          <i
            class="fa fa-github fa-3x"
            style={{
              fontSize: "48px",
              color: "black",
              // "font-size:48px;color:black"
            }}
          ></i>
        </a>
        <a href="#Twitter">
          <i
            class="fa fa-twitter-square"
            style={{
              fontSize: "48px",
              color: "lightblue",
              // "font-size:48px;color:black"
            }}
          ></i>
        </a>
        <a href="https://www.linkedin.com/in/hannah-chung-463061b4/">
          <i class="fa fa-linkedin-square fa_custom fa-3x"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
