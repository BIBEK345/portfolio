import React from 'react';


const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6 order-md-1 order-2">
            <h2>About Me</h2>
            <p>
              Hi, I'm a passionate Front-End Developer with a knack for designing user-friendly interfaces. I enjoy bringing ideas to life
              with modern web technologies.
            </p>
            <a href="#projects" className="btn btn-primary mt-3">
              View My Work
            </a>
          </div>
          {/* Image Section */}
          <div className="col-md-6 order-md-2 order-1 text-center">
            <img
              src="../peace.png"
              alt="Profile"
              className="img-fluid circle shadow"
              style={{ maxWidth: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
