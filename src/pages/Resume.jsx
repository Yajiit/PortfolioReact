// src/pages/Resume.jsx
import React from 'react';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <div className="resume-content">
        <p>
          You can download my resume {/*<a href="resume.pdf"></a>.*/}        </p>
        <h3>Proficiencies</h3>
        <ul>
          <li>Web Development</li>
          <li>HTML</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>MERN Stack</li>
          <li>Handlebars</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
