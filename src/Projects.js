import React from "react";


function Projects() {
  const projects = [
    {
      title: "Weight Prediction Using Data Science",
      description: "predict weight of archaeological objects."
     
    },
    {
      title: "Task Management",
      description: "Managing day-to-day tasks using Python"
     
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
