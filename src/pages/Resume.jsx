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
            href={`data:text/plain;charset=utf-8,${encodeURIComponent(resumeText)}`}
            download="resume.txt"
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
          <li>MERN Stack</li>
          <li>Handlebars</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
