import React from 'react';


import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
    <div className="container">
      <div className="row">
        {/* About Section */}
        <div className="col-md-4 mb-4">
          <h4>About Me</h4>
          <p>
            I’m a passionate Front-End Developer with a focus on building
            exceptional digital experiences. Let’s connect and work together!
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-md-4 mb-4">
          <h4>Quick Links</h4>
          <ul className="list-unstyled">
            <li>
              <a href="/about" className="text-white">
                About Me
              </a>
            </li>
            <li>
              <a href="/projects" className="text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="col-md-4 mb-4">
          <h4>Connect with Me</h4>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </div>
    </div>
  </footer>
    
  );
};

export default Footer;
