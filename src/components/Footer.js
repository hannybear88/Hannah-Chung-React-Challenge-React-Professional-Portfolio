import React from 'react';

function Footer(props) {
    return (
    <footer>
        <div class="div3">
        <div class="left">
          <h3>Contact Me</h3>
        </div>
        <div class="contacts-links" id="Contact Me">
         
          <a href="mailto:hannahkchung88@gmail.com">
            <i
              class="fa fa-envelope"
              style={{
                fontSize: "48px",
                color: "green",
              }}
            ></i>
          </a>
          <a href="#https://github.com/hannybear88">
            <i
              class="fa fa-github fa-3x"
              style={{
                fontSize: "48px",
                color: "black",
              }}
            ></i>
          </a>
          <a href="https://twitter.com/OFCLCoderChung">
            <i
              class="fa fa-twitter-square"
              style={{
                fontSize: "48px",
                color: "lightblue",
              }}
            ></i>
          </a>
          <a href="https://www.linkedin.com/in/hannah-kim-chung-a0455a58/">
            <i class="fa fa-linkedin-square fa_custom fa-3x"
             style={{ 
              fontSize: "48px",
              color: "blue",
            }}
            ></i>
          </a>
          <a href="https://stackoverflow.com/users/21315989/h-c">
          <i class="fa fa-stack-overflow" 
          style={{ 
            fontSize: "48px",
            color: "darkorange",
          }}
          ></i>
          </a>
        </div>
      </div>
    </footer>
    );
}

export default Footer;