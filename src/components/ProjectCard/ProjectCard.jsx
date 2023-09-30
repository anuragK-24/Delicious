// import React from "react";
import "./ProjectCard.scss";
import githubIcon from "../../icon/github.svg";
import linkIcon from "../../icon/link.svg";

export default function ProjectCard({
  imageUrl,
  label,
  description,
  projectLink,
  deployLink,
}) {
  return (
    <div className="ProjectCard">
      <img className="ProjectCard__Image" src={imageUrl} alt="github" />
      <div className="ProjectCard__Intro">
        <h1 className="ProjectCard__Intro__Heading">{label}</h1>
        <p className="ProjectCard__Intro__Description">{description}</p>
        <div className="ProjectCard__Intro__Icons">
        
          {projectLink && projectLink.length!==0 && <a href={projectLink} rel="noopener noreferrer"><img className="ProjectCard__Intro__Icons__Icon" src={githubIcon} alt="" /></a>}
          
          {deployLink  &&  deployLink.length!==0 && <a href={deployLink}rel="noopener noreferrer"><img className="ProjectCard__Intro__Icons__Icon"  src={linkIcon} alt="" /></a>}
        
        </div>
      </div>
    </div>
  );
}
