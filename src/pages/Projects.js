import React, { useEffect } from "react";
import gsap from "gsap";
import "../styles/Projects.css";

function Projects() {
  useEffect(() => {
    gsap.fromTo(".projects", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
  }, []);

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <p>Check out some of my best work in web and app development.</p>
    </div>
  );
}

export default Projects;
