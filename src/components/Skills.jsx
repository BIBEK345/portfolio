import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">Skills</h2>
        <div className="row text-center">
          {/* Skill 1 */}
          <div className="col-md-3 mb-4">
            <div className="card shadow h-100 skill-card">
              <div className="card-body">
                <div className="skill-icon rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3">
                  <img
                    src="../images.png" // Replace with your HTML/CSS image
                    alt="HTML & CSS"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h5 className="card-title">HTML & CSS</h5>
                <p className="card-text">Building elegant and responsive web pages.</p>
              </div>
              <div className="overlay">
                <span className="arrow">&#8594;</span>
              </div>
            </div>
          </div>

          {/* Skill 2 */}
          <div className="col-md-3 mb-4">
            <div className="card shadow h-100 skill-card">
              <div className="card-body">
                <div className="skill-icon rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3">
                  <img
                    src="../image.png" // Replace with your JavaScript image
                    alt="JavaScript"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h5 className="card-title">JavaScript</h5>
                <p className="card-text">Creating dynamic and interactive web experiences.</p>
              </div>
              <div className="overlay">
                <span className="arrow">&#8594;</span>
              </div>
            </div>
          </div>

          {/* Skill 3 */}
          <div className="col-md-3 mb-4">
            <div className="card shadow h-100 skill-card">
              <div className="card-body">
                <div className="skill-icon rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3">
                  <img
                    src="logo192.png" // Replace with your React image
                    alt="React"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h5 className="card-title">React</h5>
                <p className="card-text">Building scalable and modern web applications.</p>
              </div>
              <div className="overlay">
                <span className="arrow">&#8594;</span>
              </div>
            </div>
          </div>

          {/* Skill 4 */}
          <div className="col-md-3 mb-4">
            <div className="card shadow h-100 skill-card">
              <div className="card-body">
                <div className="skill-icon rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3">
                  <img
                    src="../wee.png" // Replace with your Responsive Design image
                    alt="Responsive Design"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h5 className="card-title">Responsive Design</h5>
                <p className="card-text">Ensuring great user experiences across devices.</p>
              </div>
              <div className="overlay">
                <span className="arrow">&#8594;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
