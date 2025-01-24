import React from "react";



function Skills() {
  const skills = ["React", "JavaScript", "CSS", "HTML", "Node.js"];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
