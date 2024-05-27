import { useTranslation } from "react-i18next";
import { AboutMeContainer, ExpContainer, SkillsSection } from "./styles";
import stackIcons from "../../../../stack-db.json"
import { ExpCard } from "../../atoms/ExpCard";

interface Skills {
  [key: string]: string;
}

interface AboutMeProps{
  id?: string;
}

const expIds = [1, 2];

export const AboutMe: React.FC<AboutMeProps> = ({ id }) => {
  const { t } = useTranslation("global");
  const skills: Skills = stackIcons.skills;

  return(     
    <AboutMeContainer id={id}>
      <h2>{t("about-me.title")}</h2>
      <SkillsSection>
        {Object.keys(skills).map((skill) => (
          <img key={skill} src={skills[skill]} alt={skill} /> 
        ))}
      </SkillsSection>
      <ExpContainer>
        {expIds.map((expId) => (
          <ExpCard
            key={expId} 
            expId={expId}
          />
        ))}
      </ExpContainer>
    </AboutMeContainer>
  )
}