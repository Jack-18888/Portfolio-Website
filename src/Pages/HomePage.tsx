import { useState } from "react";
import "../static/HomePage.css";

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<0 | 1 | 2>(0); // default to first section

  const handleViewWork = () => {
    setActiveSection(2); // Jump straight to Projects
    // Optionally, smooth scroll if the section is farther down!
    document.querySelector(".projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="homepage">
      <section className="about">
        <h2>Hi, I'm Jack Shi</h2>
        <p>Full Stack Developer passionate about crafting interactive web experiences.</p>
        <button onClick={handleViewWork}>View My Work</button>
      </section>

      <div className="selection">
        <button
          onClick={() => setActiveSection(0)}
          className={activeSection === 0 ? "active" : ""}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveSection(1)}
          className={activeSection === 1 ? "active" : ""}
        >
          Skills
        </button>
        <button
          onClick={() => setActiveSection(2)}
          className={activeSection === 2 ? "active" : ""}
        >
          Projects
        </button>
      </div>

      {activeSection === 0 ? (
        <section className="experiences">
          <h3>Experiences</h3>
          <div className="job-list">
            <div className="job-card">Project 1</div>
            <div className="job-card">Project 2</div>
            <div className="job-card">Project 3</div>
          </div>
        </section>
      ) : activeSection === 1 ? (
        <section className="skills">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>JavaScript / TypeScript</li>
            <li>React / Next.js</li>
            <li>Node.js / Express</li>
            <li>MongoDB / PostgreSQL</li>
            <li>CSS / Tailwind CSS</li>
            <li>Git / GitHub</li>
          </ul>
        </section>
      ) : (
        <section className="projects">
          <h3>Projects</h3>
          <div className="project-list">
            <div className="project-card">Project 1</div>
            <div className="project-card">Project 2</div>
            <div className="project-card">Project 3</div>
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;
