import React, { useEffect } from "react";
import gsap from "gsap";
import "../styles/Home.css";

function Home() {
  useEffect(() => {
    gsap.fromTo(".home", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
    gsap.fromTo(".section", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1, stagger: 0.3 });
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>🚀 Welcome to My Portfolio</h1>
        <p>I am <strong>Sonu Kumar Singh</strong>, a passionate Software Developer specializing in Web & App Development.</p>
      </section>

      {/* About Section */}
      <section className="about section">
        <h2>👨‍💻 About Me</h2>
        <p className="about-text">
          B.Tech in Computer Science from <strong>IEM Kolkata</strong> (CGPA: 8.26/10).  
          I have a strong foundation in <span class="highlight">Python, C++, React.js, Flutter, SQL</span>.  
          I enjoy solving complex problems and building scalable applications.
        </p>
      </section>

      {/* Experience Section */}
      <section className="experience section">
        <h2>📂 Experience</h2>
        <h3>Software Developer Intern - Odoo IN</h3>
        <p><strong>May 2024 - July 2024 | Gandhinagar, Gujarat</strong></p>
        <ul>
          <li>🚀 Optimized 3+ Odoo modules, improving database performance by 40%.</li>
          <li>🔗 Integrated third-party APIs & enhanced application efficiency.</li>
          <li>⚡ Ensured data integrity using SQL constraints & participated in agile development.</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects section">
        <h2>🚀 My Projects</h2>
        <div className="project-card">
          <h3>💬 Web Chatting App</h3>
          <p>React.js & Firebase - Real-time messaging for 1000+ daily messages.</p>
        </div>
        <div className="project-card">
          <h3>📖 IIT JEE/NEET Notes App</h3>
          <p>Flutter & Google Drive - Android app with 50+ notes on Play Store.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact section">
        <h2>📩 Contact Me</h2>
        <p>Email: <a href="mailto:officialsinghsonu@gmail.com">officialsinghsonu@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/sonu-singh-184007208">linkedin.com/in/sonu-singh-184007208</a></p>
        <p>GitHub: <a href="https://github.com/sonu-12345">github.com/sonu-12345</a></p>
      </section>
    </div>
  );
}

export default Home;
