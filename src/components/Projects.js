import React from 'react';
import project1Img from "../images/Project1.jpeg";
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
          <a
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
          </a>

          <section class=" box2">
            <a href="https://ev-charge-n-go.herokuapp.com/" target="_blank">
              <div class="img-box">
                <h3>Project 2</h3>
                <img src={project2Img} />
              </div>
            </a>
            <a
              href="https://hannybear88.github.io/Web-APIs-Challenge-Code-Quiz/"
              target="_blank"
            >
              <div class="img-box">
                <h3>Project 3</h3>
                <img src={project3Img} />
              </div>
            </a>
          </section>
          <section class=" box2">
            <a href="under-construction4.html">
              <div class="img-box">
                <h3>Project 4</h3>
                <img src={project4Img} />
              </div>
            </a>
            <a href="under-construction5.html">
              <div class="img-box">
                <h3>Project 5</h3>

                <img src={project5Img} />
              </div>
            </a>
          </section>
        </div>
      </div>
    );
}

export default Projects;