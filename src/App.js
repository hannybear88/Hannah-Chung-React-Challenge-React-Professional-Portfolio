import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {

  // const selectedPage = "About";
  const [selectedPage, setSelectedPage] = useState("About")

  function render() {
    if(selectedPage == "About") {
      return <About />
    } else if (selectedPage == "Work") {
      return <Projects />
    } else if (selectedPage == "Contact") {
      return <Contact />
    } else if (selectedPage == "Resume") {
      return <Resume />
    }
  }

  return (
    <div className="App">
      <Header setSelectedPage={setSelectedPage} selectedPage={selectedPage}/>
      <Banner />
      <main>
          {render()}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
