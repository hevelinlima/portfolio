import { useTranslation } from "react-i18next";
import { HorizontalCardContainer } from "./styles"; 

interface ExperienceCardProps{
  expId: number;
}

interface ExperienceI{ 
  id: number; 
  company: string; 
  tenure: string; 
  jobTitle: string; 
  description: string; 
} 

export const HorizontalCard: React.FC<ExperienceCardProps> = ({ expId }) =>{
  const { t } = useTranslation("global")
  
  const experiences: ExperienceI[] = t("experience.exp1", { returnObjects: true });

  const experience = experiences.find((exp)=> exp.id === expId);

  if (!experience){
    return <div>Experience not found</div>
  }

  return( 
  <HorizontalCardContainer>
    <h3>{experience.jobTitle}</h3>
    <h5>{experience.company}</h5>
    <h6>{experience.tenure}</h6>
    <p>{experience.description}</p>
  </HorizontalCardContainer> 
)}