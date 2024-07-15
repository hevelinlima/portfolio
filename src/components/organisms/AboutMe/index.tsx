import { useTranslation } from "react-i18next";
import { AboutMeContainer, ExpContainer, SkillsSection } from "./styles";
import stackIcons from "../../../../stack-db.json"
import { VerticalCard } from "../../atoms/VerticalCard";



interface Skills {
  [key: string]: string;
}

interface AboutMeProps{
  id?: string;
}

const courseIds = [1, 2];
// const expIds = [1];

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
      {/* <HCardContainer>
        {expIds.map((expId) => (
            <HorizontalCard
              key={expId} 
              expId={expId}
            />
          ))}
      </HCardContainer> */}
      <ExpContainer>
        {courseIds.map((courseId) => (
          <VerticalCard
            key={courseId} 
            courseId={courseId}
          />
        ))}
      </ExpContainer>
    </AboutMeContainer>
  )
}