import React from "react";
import myResume from "../pdf/HannahChungResume.02.2023.pdf"

function Header(props) {
  return (
    <header>
      <div class="name">
        <h3>Hannah Kim Chung</h3>
      </div>

      <nav>
        <ul>
          <li
            onClick={() => {
              props.setSelectedPage("About");
            }}
          >
            <a href="#About Me">AboutMe</a>
          </li>
          <li
            onClick={() => {
              props.setSelectedPage("Work");
            }}
          >
            <a href="#Work">Work</a>
          </li>
          <li>
            <a href={myResume} download>Resume</a>
          </li>
          <li 
            onClick={() => {
              props.setSelectedPage("Contact");
            }}>
            <a href="#Contact Me">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
