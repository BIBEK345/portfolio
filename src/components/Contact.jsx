import React from "react";
import './Contact.css';


export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "73de85e2-64a4-47d0-9d23-43ae7696bfee");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    
    <section id="contact" className="contact-section">
    <div className="container">
      <h2 className="section-title text-center mb-5">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <form onSubmit={onSubmit} className="contact-form">
            <div className="input-group">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="input-field"
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="input-field"
              />
            </div>

            <div className="input-group">
              <textarea
                name="message"
                required
                placeholder="Your Message"
                className="input-field"
              ></textarea>
            </div>

            <div className="input-group">
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </div>
          </form>

          {/* Display result or success message */}
          {result && <span className="result-message">{result}</span>}
        </div>
      </div>
    </div>
  </section>
  );
}