import React from 'react';
// import project1Img from "../images/Project1.jpeg";
import project2Img from "../images/Project2.jpeg";
import project3Img from "../images/Project3.jpeg";
import project4Img from "../images/Project4.jpeg";
import project5Img from "../images/Project5.jpeg";

function Projects(props) {
    return (
        <div class="div2">
        <div class="left">
          <h3>My Projects</h3>
        </div>
        <div class="projects" id="Work">
          {/* <a
            href="https://hannybear88.github.io/Project-1-Project-DIY/index.html"
            target="_blank"
          >
            <section class="project1">
              <h3>
                {" "}
                Let's Go DIY!!! : HTML5, CSS3, Vanilla Javascript,
                Bootstrap, and Web-Server-APIs
              </h3>
              <img class="big-screen" src={project1Img} />
              <img
                class="small-screen"
                src="https://imgmedia.lbb.in/media/2019/10/5db70d3274cbd62b096810c2_1572277554314.jpg"
              />
            </section>
          </a> */}
          <section class=" box2">
            <a href="https://hannybear88.github.io/Project-1-Project-DIY/index.html" target="_blank">
              <div class="img-box">
                <h3>Project 1</h3>
                <img src={project2Img} />
                <div className="floating">
                  {/* link for deployed */}
                  <a href="https://hannybear88.github.io/Project-1-Project-DIY/index.html"><h4>Deployed</h4></a>
                  {/* link for github repo */}
                  <a href="https://github.com/hannybear88/Project-1-Project-DIY"><h4>Github repo</h4></a>
                </div>
              </div>
            </a>
            <a
              href="https://hannybear88.github.io/Web-APIs-Challenge-Code-Quiz/"
              target="_blank"
            >
              <div class="img-box">
                <h3>Project 2</h3>
                <img src={project2Img} />
                <div className="floating">
                  {/* link for deployed */}
                  <a href="https://hannybear88.github.io/Web-APIs-Challenge-Code-Quiz/"><h4>Deployed</h4></a>
                  {/* link for github repo */}
                  <a href="https://github.com/hannybear88/Web-APIs-Challenge-Code-Quiz"><h4>Github repo</h4></a>
                </div>
              </div>
            </a>
          </section>
          <section class=" box2">
            <a href="https://hannybear88.github.io/Server-Side-APIs-Challenge-Weather-Dashboard/" target="_blank">
              <div class="img-box">
                <h3>Project 3</h3>
                <img src={project3Img} />
                <div className="floating">
                  {/* link for deployed */}
                  <a href="https://hannybear88.github.io/Server-Side-APIs-Challenge-Weather-Dashboard/"><h4>Deployed</h4></a>
                  {/* link for github repo */}
                  <a href="https://github.com/hannybear88/Server-Side-APIs-Challenge-Weather-Dashboard"><h4>Github repo</h4></a>
                </div>
              </div>
            </a>
            <a
              href="https://expressjs-challenge-note-taker.herokuapp.com/"
              target="_blank"
            >
              <div class="img-box">
                <h3>Project 4</h3>
                <img src={project4Img} />
                <div className="floating">
                  {/* link for deployed */}
                  <a href="https://expressjs-challenge-note-taker.herokuapp.com/"><h4>Deployed</h4></a>
                  {/* link for github repo */}
                  <a href="https://github.com/hannybear88/Express.js-Challenge-Note-Taker"><h4>Github repo</h4></a>
                </div>
              </div>
            </a>
          </section>
          <section class=" box2">
            <a href="https://pwa-challenge-text-editor.herokuapp.com/">
              <div class="img-box">
                <h3>Project 5</h3>
                <img src={project5Img} />
                <div className="floating">
                  {/* link for deployed */}
                  <a href="https://pwa-challenge-text-editor.herokuapp.com/"><h4>Deployed</h4></a>
                  {/* link for github repo */}
                  <a href="hhttps://github.com/hannybear88/Progressive-Web-Applications--PWA--Challenge-Text-Editor"><h4>Github repo</h4></a>
                </div>
              </div>
            </a>
            <a href="https://ev-charge-n-go.herokuapp.com/">
              <div class="img-box">
                <h3>Project 6</h3>

                <img src={project5Img} />
                <div className="floating">
                  {/* link for deployed */}
                  <a href="https://ev-charge-n-go.herokuapp.com/"><h4>Deployed</h4></a>
                  {/* link for github repo */}
                  <a href="https://github.com/hannybear88/-Project-2-EV-Charge-N-Go"><h4>Github repo</h4></a>
                </div>
              </div>
            </a>
          </section>
        </div>
      </div>
    );
}

export default Projects;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Individual Card build-out using props
// function ProjectCards(props) {
//     return (
//       <div className="card">
//         <div className="img-container">
//           <img alt={props.name} src={props.image}/>
//         </div>
//         <div className="content">
//               <p className="project-title" id="card-title">{props.name}</p>
//               <p>
//               <a href={props.github}><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/></a>
//               <a href={props.deploy}><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon"/></a>
//               </p>
//               <p id="topics">
//                     ({props.topics})
//                 </p>
//         </div>
//       </div>
//     );
// }

//   export default ProjectCards;




