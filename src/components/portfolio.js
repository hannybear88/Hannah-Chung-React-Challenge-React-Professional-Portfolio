import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "",
    languages: "react, jsx, css, js",
    packages: "apollo-server-express, bcrypt, Express.js, graphql, if-env, jsonwebtoken, mongoose, nodemon, react-confirm-alert, react-popup-alert, uuid, concurrently",
    image: "",
    description: "",
    repo: "",
    live: "",
  },
  {
    id: 1,
    title: "",
    languages: "html, handlebars, js",
    packages: "bcrypt, connect-session-sequelize, dotenv, Express.js, express-handlebars, express-session, heroku, mysql2, sequelize",
    image: "",
    description: "",
    repo: "",
    live: "",
  },
  {
    id: 2,
    title: "",
    languages: "html, css, js, handlebars",
    packages: "bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, handlebars, mysql2, puppeteer, sequelize",
    image: "",
    description: "",
    live: "",
    repo: "",
  },
  {
    id: 3,
    title: "noheadphones",
    languages: "html, css, js",
    image: "/img/noheadphones.png",
    packages: "none",
    description: "Gives you a recommendation for media that will entertain you during your commute.",
    repo: "",
    live: "",
  },
  {
    id: 4,
    title: "",
    languages: "html, css, js",
    packages: "Express.js, Generate Unique IDs",
    image: "",
    description: "",
    repo: "",
    live: "",
  },
  {
    id: 5,
    title: "",
    languages: "html, css",
    packages: "none",
    image: "",
    description: "",
    repo: "",
    live: "",
  },
  {
    id: 6,
    title: "",
    languages: "html, css, js",
    packages: "none",
    image: "",
    description: "",
    repo: "",
    live: "",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;