import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <section>
        <h1>About Me</h1>
        <p>
          I'm a full-stack web developer with a background in competitive e-sports.
          I represented a well known Polish e-sport organization – Anonymo Esports, 
          by competing in various international, aswell as national tournaments in the 
          e-sports oriented game VALORANT by Riot Games. Managed to achieve great results 
          with my team in many tournaments, online and offline LAN tournaments, 
          was awarded a MVP of the first official polish LAN tournament (BeContender #1), 
          competed in leagues organized by Polska Liga Esportowa and Polsat Games.
        </p>
      </section>

      <section>
        <h2>My Journey</h2>
        <div>
          <h3>Current Focus</h3>
          <p>
            Building modern web applications with React, TypeScript, and Python.
            Learning new technologies like Angular, .NET, and SQL databases to expand my skillset.
          </p>

          <h3>Background</h3>
          <p>
            Being a former professional player in a tactical FPS game, I confirmed my 
            ability to work as a team and communicate at the highest level, as well as 
            my ability to think creatively and make crucial decisions in crucical moments.
          </p>
        </div>
      </section>

      <section>
        <h2>What Im Building</h2>
        <ul>
          <li>Responsive web applications</li>
          <li>Mobile apps with Capacitor</li>
          <li>Automation tools with Python</li>
          <li>Interactive user interfaces</li>
        </ul>
      </section>

      <section>
        <h2>Currently Learning</h2>
        <p>Always expanding my knowledge in:</p>
        <ul>
          <li>Angular framework</li>
          <li>.NET and C# development</li>
          <li>Database design and SQL</li>
          <li>Docker and containerization</li>
          <li>Advanced testing with WebdriverIO</li>
        </ul>
      </section>
    </div>
  );
};

export default About;