import React from "react";
import { useTranslation } from "react-i18next";
import { LinkIcons, ProjectCard } from "./styles";

interface ProjectsProps{
  projectId: number;
  reverse?: boolean;
}

interface ProjectItem {
  id: number;
  previewImage: string;
  name: string;
  description: string;
  linkGithub: string;
  linkDeploy: string;
}

export const Projects: React.FC<ProjectsProps> = ({ projectId , reverse }) => {

  const { t } = useTranslation("global");

  const projects: ProjectItem[] = t("projects.items", { returnObjects: true });

  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }
 
  return(
    <ProjectCard reverse={reverse}>
      <img src={project.previewImage} alt={project.name} />
      <div className="description">
        {project.description}
        <LinkIcons>
          <a href={project.linkDeploy}>
            <img src="deploy-icon.svg" className="icon-img" alt="" />
            <span>Deploy</span>
          </a>
          <a href={project.linkGithub}>
            <img src="github.svg" className="icon-img" alt="" />
            <span>Code</span>
          </a>
        </LinkIcons>
      </div>
    </ProjectCard>
  )
}
