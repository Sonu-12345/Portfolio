import React, { useEffect } from "react";
import gsap from "gsap";
import "../styles/Contact.css";

function Contact() {
  useEffect(() => {
    gsap.fromTo(".contact", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>Email: officialsinghsonu@gmail.com</p>
      <p>LinkedIn: linkedin.com/in/sonu-singh-184007208</p>
      <p>GitHub: https://github.com/sonu-12345</p>
    </div>
  );
}

export default Contact;
