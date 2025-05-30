import "../static/HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <h2>Hi, I'm Jack Shi</h2>
        <p>Full Stack Developer passionate about crafting interactive web experiences.</p>
        <button>View My Work</button>
      </section>

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

      <section className="projects">
        <h3>Projects</h3>
        <div className="project-list">
          {/* Project cards */}
          <div className="project-card">Project 1</div>
          <div className="project-card">Project 2</div>
          <div className="project-card">Project 3</div>
        </div>
      </section>

      <section className="about">
        <h3>About Me</h3>
        <p>I love building modern web apps with React, Node.js, and more!</p>
      </section>
    </div>
  );
};

export default HomePage;
