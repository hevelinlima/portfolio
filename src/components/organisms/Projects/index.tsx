import React from "react";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "./styles";

interface ProjectsProps{
  projectId: number;
  reverse?: boolean;
}

interface ProjectItem {
  id: number;
  previewImage: string;
  name: string;
  description: string;
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
      </div>
    </ProjectCard>
  )
}
