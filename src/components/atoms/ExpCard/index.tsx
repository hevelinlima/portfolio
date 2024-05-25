import { useTranslation } from "react-i18next";
import { ExpContainer } from "./styles";

interface ExpProps{
  expId: number;
}

interface ExperienceI{
  id: number;
  name: string;
  status: string;
  org: string;
  description: string;
  skills: string;
}

export const ExpCard: React.FC<ExpProps> = ({ expId }) =>{
  const { t } = useTranslation("global");

  const experiences: ExperienceI[] = t("about-me.experiences", { returnObjects: true });

  const experience = experiences.find((exp)=> exp.id === expId);

  if (!experience){
    return <div>Experience not found</div>
  }

  return(
    <ExpContainer>
      <h3>{experience.name}</h3>
      <h5>{experience.org}</h5>
      <h6>{experience.status}</h6>
      <p>{experience.description}</p>
      <p>{experience.skills}</p>
    </ExpContainer>
  )
}