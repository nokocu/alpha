import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <section>
        <h1>nokocu</h1>
        <h2>Full-Stack Web Developer</h2>
        <p>
          Former e-sports competitior - Now creating web applications
          and building cool websites.
        </p>
        <div>
          <button>My Projects</button>
          <button>Contact Me</button>
        </div>
      </section>

      <section>
        <h3>My Tech Stack</h3>

        <div>
          <h4>Frontend</h4>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Angular</span>
          <span>jQuery</span>
          <span>Capacitor</span>
        </div>

        <div>
          <h4>Backend</h4>
          <span>Python</span>
          <span>.NET</span>
          <span>Node.js</span>
          <span>C#</span>
        </div>

        <div>
          <h4>Database</h4>
          <span>SQL</span>
          <span>MS SQL</span>
        </div>

        <div>
          <h4>Testing & Automation</h4>
          <span>Selenium</span>
          <span>WebdriverIO</span>
        </div>

        <div>
          <h4>DevOps & Tools</h4>
          <span>Git</span>
          <span>Docker</span>
          <span>VSCode</span>
        </div>

        <div>
          <h4>Design & Media</h4>
          <span>Photoshop</span>
          <span>Vegas PRO</span>
          <span>FL Studio</span>
        </div>

      </section>

      <section>
        <h3>Featured Projects</h3>
        <p>Recent work:</p>
        {/* later */}
      </section>
    </div>
  );
};

export default Home;