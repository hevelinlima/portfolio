import { useTranslation } from "react-i18next";
import { AboutMeContainer, SkillsSection } from "./styles";
import stackIcons from "../../../../stack-db.json"

interface Skills {
  [key: string]: string;
}

export function AboutMe(){
  const { t } = useTranslation("global");
  const skills: Skills = stackIcons.skills;

  return(     
    <AboutMeContainer>
      <h2>{t("about-me.title")}</h2>
      <SkillsSection>
        {Object.keys(skills).map((skill) => (
          <img key={skill} src={skills[skill]} alt={skill} /> 
        ))}
      </SkillsSection>
    </AboutMeContainer>
  )
}