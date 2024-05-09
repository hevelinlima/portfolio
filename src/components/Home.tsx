import { useTranslation } from "react-i18next"

export function Home(){
  const { t } = useTranslation("global")
  return(
    <div>
      <p>{t("home.body")}</p>
    </div>
  )
}