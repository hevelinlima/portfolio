import { useTranslation } from "react-i18next"
import { HomeContainer } from "./styles"
import headerImage from '/header-image.svg'

export function Home(){
  const { t } = useTranslation("global")
  return(
    <HomeContainer>
      <p>{t("home.body")}</p>
      <img src={ headerImage } alt="" />
    </HomeContainer>
  )
}