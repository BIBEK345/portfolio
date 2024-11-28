import React from "react";
import "./Home.css";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <header className="hero">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="text-section mb-4 mb-md-0">
            <h1>Welcome to My Portfolio</h1>
            <p>
              I'm a Front-End Developer specializing in building exceptional digital experiences.
            </p>
            <a href="/contact" className="btn btn-light btn-lg mt-3">
              Contact Me
            </a>
          </div>
          <div className="image-section">
            <img
              src="../picture.png"
              alt="Profile"
              className="rounded-circle img-fluid"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
          </div>
        </div>
      </header>

      <div>
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
