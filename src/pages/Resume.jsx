import React from 'react';
import resumeText from '../utils/resumeText.js'

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <div className="resume-content">
        <p>
          You can download my resume{' '}
          <a
            href={"./resume.docx"}
            download="AgerterTJresume.docx"
          >
            here
          </a>
        </p>
        <h3>Proficiencies</h3>
        <ul>
          <li>Web Development</li>
          <li>HTML</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>SQL</li>
          <li>CSS</li>
          <li>MERN Stack</li>
          <li>Handlebars</li>
          <li>Progressive Web Applications</li>
          <li>Model-View-Controller</li>
          <li>Application Programming Interfaces</li>
          <li>Object-Oriented Programming</li>
          <li>Object-Relational Mapping</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
