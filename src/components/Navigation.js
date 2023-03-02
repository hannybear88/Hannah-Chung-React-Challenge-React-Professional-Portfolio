import React from "react";

function Navigation (props) {
  return (
    <header>
      <div class="name">
        <h3>Hannah Kim Chung</h3>
      </div>

      <nav>
        <ul>
          <li
            className = {props.selectedPage == "About" ? "selected" : ""}
            onClick={() => {
              props.setSelectedPage("About");
            }}
          >
            <a href="#About Me">AboutMe</a>
          </li>
          <li
          className = {props.selectedPage == "Work" ? "selected" : ""}
            onClick={() => {
              props.setSelectedPage("Work");
            }}
          >
            <a href="#Work">Projects</a>
          </li>
          <li 
          className = {props.selectedPage == "Resume" ? "selected" : ""}
            onClick={() => {
              props.setSelectedPage("Resume");
            }}>
            <a href="#Resume">Resume</a>
          </li>
          <li 
          className = {props.selectedPage == "Contact" ? "selected" : ""}
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

export default Navigation;
