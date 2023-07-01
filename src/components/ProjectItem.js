import React from "react";

function ProjectItem({ name, about, technologies }) {

 const newDeliverable = technologies.map((tech) => {
  // console.log(`tech from technologies`, tech)
  return <span key={tech}>{tech}</span>
 })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {newDeliverable}
      </div>
    </div>
  );
}

export default ProjectItem;
