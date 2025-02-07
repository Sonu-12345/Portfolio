import React, { useEffect } from "react";
import gsap from "gsap";
import "../styles/Home.css";

function Home() {
  useEffect(() => {
    gsap.fromTo(".home", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1 });
  }, []);

  return (
    <div className="home">
      <h2>Welcome to My Portfolio</h2>
      <p>I am a passionate software developer skilled in React.js, Flutter, and more.</p>
    </div>
  );
}

export default Home;
