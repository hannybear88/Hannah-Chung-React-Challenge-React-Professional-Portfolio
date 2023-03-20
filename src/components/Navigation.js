import React from "react";

function Navigation(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="myNav">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <h3>Hannah Kim Chung</h3>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li
              className={
                props.selectedPage == "About" ? "selected nav-item" : "nav-item"
              }
              onClick={() => {
                props.setSelectedPage("About");
              }}
            >
              <a class="nav-link active" href="#About Me">
                AboutMe
              </a>
            </li>
            <li
              className={
                props.selectedPage == "Work" ? "selected nav-item" : "nav-item"
              }
              onClick={() => {
                props.setSelectedPage("Work");
              }}
            >
              <a class="nav-link" href="#Work">
                Projects
              </a>
            </li>
            <li
              className={
                props.selectedPage == "Resume"
                  ? "selected nav-item"
                  : "nav-item"
              }
              onClick={() => {
                props.setSelectedPage("Resume");
              }}
            >
              <a class="nav-link" href="#Resume">
                Resume
              </a>
            </li>
            <li
              className={
                props.selectedPage == "Contact"
                  ? "selected nav-item"
                  : "nav-item"
              }
              onClick={() => {
                props.setSelectedPage("Contact");
              }}
            >
              <a class="nav-link" href="#Contact Me">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <header>
    //   <div class="name">
    //     <h3>Hannah Kim Chung</h3>
    //   </div>

    //   <nav>
    //     <ul>
    //       <li
    //         className = {props.selectedPage == "About" ? "selected" : ""}
    //         onClick={() => {
    //           props.setSelectedPage("About");
    //         }}
    //       >
    //         <a href="#About Me">AboutMe</a>
    //       </li>
    //       <li
    //       className = {props.selectedPage == "Work" ? "selected" : ""}
    //         onClick={() => {
    //           props.setSelectedPage("Work");
    //         }}
    //       >
    //         <a href="#Work">Projects</a>
    //       </li>
    //       <li
    //       className = {props.selectedPage == "Resume" ? "selected" : ""}
    //         onClick={() => {
    //           props.setSelectedPage("Resume");
    //         }}>
    //         <a href="#Resume">Resume</a>
    //       </li>
    //       <li
    //       className = {props.selectedPage == "Contact" ? "selected" : ""}
    //         onClick={() => {
    //           props.setSelectedPage("Contact");
    //         }}>
    //         <a href="#Contact Me">Contact Me</a>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
}

export default Navigation;
