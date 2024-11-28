import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <section id="project" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">My Projects</h2>
        <div className="row g-4">
          {/* Project 1 */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100 project-card">
              <div className="card-img-wrapper">
                <img
                  src="../web.png"
                  className="card-img-top"
                  alt="Project 1"
                />
              </div>
              <div className="overlay">
                
              </div>
              <div className="card-body">
                <p className="card-text">
                  This project highlights my ability to build responsive and interactive web applications.
                </p>
                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100 project-card">
              <div className="card-img-wrapper">
                <img
                  src="../wee.png"
                  className="card-img-top"
                  alt="Project 2"
                />
              </div>
              <div className="overlay">
                
              </div>
              <div className="card-body">
                <p className="card-text">
                  An innovative solution designed to tackle complex problems with efficiency.
                </p>
                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100 project-card">
              <div className="card-img-wrapper">
                <img
                  src="../web.png"
                  className="card-img-top"
                  alt="Project 3"
                />
              </div>
              <div className="overlay">
               
              </div>
              <div className="card-body">
                <p className="card-text">
                  A feature-rich application designed with scalability and performance in mind.
                </p>
                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
