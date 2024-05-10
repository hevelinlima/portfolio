import React from "react";
import { useTranslation } from "react-i18next"

export function Header(){
  const { t, i18n } = useTranslation("global")
  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang)
  }
  return(
    <div>
      <p>{t("header.text")}</p>
      <select onChange={handleChangeLanguage} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="pt">Português(BR)</option>
      </select>
    </div>
  )
}