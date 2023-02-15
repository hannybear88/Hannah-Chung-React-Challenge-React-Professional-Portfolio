import logo from "./logo.svg";
import "./App.css";

import project1Img from "./images/Project1.jpeg";
import project2Img from "./images/Project2.jpeg";
import project3Img from "./images/Project3.jpeg";
import project4Img from "./images/Project4.jpeg";
import project5Img from "./images/Project5.jpeg";
import profilepictureImg from "./images/profilepicture.jpeg";

function App() {
  return (
    <div className="App">
      <header>
        <div class="name">
          <h3>Hannah Kim Chung</h3>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#About Me">AboutMe</a>
            </li>
            <li>
              <a href="#Work">Work</a>
            </li>
            <li>
              <a href="#Resume">Resume</a>
            </li>
            <li>
              <a href="#Contact Me">Contact Me</a>
            </li>
          </ul>
        </nav>
      </header>

      <div class="banner">
        <div class="quote">
          <blockquote cite="http://www.worldwildlife.org/who/index.html">
            Favorite Quotes
            <br />
            "If you don't like your destiny, don't accept it. <br />
            Instead have the courage to change it the way want it to be."
            <br />
            "Failing doesn't give you a reason to give up, as long as you
            believe." <br />
            -Naruto Uzumaki
            <br />
          </blockquote>
        </div>
      </div>
      <figure>
      <img src={profilepictureImg} 
          alt="photo of Hannah"
          width="300px"
          height="300px"
        />
      </figure>

      <main>
        <div id="AboutMe">
          <div class="div1">
            <div class="left">
              <h3>About Me</h3>
            </div>
            <p>
              Hello! Welcome to my professional portfolio. My name is Hannah Kim
              Chung and I am originally from the Bay Area and now reside in Los
              Angeles County.
              <br />
              <br />
              First of all, I would like to say thank you for taking the time to
              look at my page. I receievd my Bachelors of Arts degree in Child
              Adolescent Development and had a career working with children for
              the past 14 years. However, I felt that it was time for a career
              change and decided on web development.
              <br />
              <br />
              I am new to web development and decided to sign up for a bootcamp
              couse. I am currently taking the bootcamp course at University of
              California San Diego Full-Stack Web Development Coding Bootcamp
              Extension Studies.
              <br />
              <br />I am ready and determined to learn all about coding. I look
              foward to see where I would like to go with web development as I
              learn and suceed in it.
            </p>
          </div>
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
        </div>
      </main>
      <footer>
        <div class="div3">
          <div class="left">
            <h3>Contact Me</h3>
          </div>
          <div class="contacts-links" id="Contact Me">
            <a href="#777-777-777">
              <i class="fa fa-phone" style={{
                fontSize: "48px",
                color: "black"
                // "font-size:48px;color:black"
              }}></i>
            </a>
            <a href="mailto:hannahkchung88@gmail.com">
              <i class="fa fa-envelope" style={{
                fontSize: "48px",
                color: "green"
                // "font-size:48px;color:black"
              }}></i>
            </a>
            <a href="#https://github.com/hannybear88">
              <i
                class="fa fa-github fa-3x"
                style={{
                  fontSize: "48px",
                  color: "black"
                  // "font-size:48px;color:black"
                }}
              ></i>
            </a>
            <a href="#Twitter">
              <i
                class="fa fa-twitter-square"
                style={{
                  fontSize: "48px",
                  color: "lightblue"
                  // "font-size:48px;color:black"
                }}
              ></i>
            </a>
            <a href="https://www.linkedin.com/in/hannah-chung-463061b4/">
              <i class="fa fa-linkedin-square fa_custom fa-3x"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
