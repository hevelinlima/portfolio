import { useTranslation } from "react-i18next";
import { AboutMeContainer } from "./styles";

export function AboutMe(){
  const { t } = useTranslation("global")
  return(     
    <AboutMeContainer>
      <h2>{t("projects.title")}</h2>
    </AboutMeContainer>
  )
}