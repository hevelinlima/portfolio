import { useTranslation } from "react-i18next"
import { FirstItem, HeaderContainer, OtherItens } from './styles.ts'

export function Header(){
  const { t, i18n } = useTranslation("global")
  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang)
  }
  return(
    <HeaderContainer>
        <ul>
          <FirstItem>
            <li><a href="">{t("header.first-item")}</a></li>
          </FirstItem>
          <OtherItens>
            <li><a href="">{t("header.second-item")}</a></li>
            <li><a href="">{t("header.third-item")}</a></li>
            <li><a href="">{t("header.fourth-item")}</a></li>
            <li>
              <select onChange={handleChangeLanguage} defaultValue={i18n.language}>
                <option value="en">English</option>
                <option value="pt">Português(BR)</option>
              </select>
            </li>
          </OtherItens>
        </ul>
      </HeaderContainer>
  )
}
