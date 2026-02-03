import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, desc, tech, link }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p className="project-desc">{desc}</p>

      <div className="project-tech">{tech}</div>

      <a href={link} target="_blank" rel="noreferrer">
        <button className="project-btn">View Project</button>
      </a>
    </div>
  );
};

export default ProjectCard;
