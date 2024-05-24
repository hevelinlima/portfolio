import { useTranslation } from "react-i18next"
import { FirstItem, HeaderContainer, OtherItems, ToggleButton } from './styles.ts'

export function Header(){
  const { t, i18n } = useTranslation("global");
  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang)
  };

  function handleToggleMenu(){

  }

  return(
    <HeaderContainer>
        <ul>
          <FirstItem>
            <li><a href="">{t("header.first-item")}</a></li>
          </FirstItem>
          <ToggleButton onClick={handleToggleMenu}>
            <img src="toggle-button.svg" alt="" />
          </ToggleButton>
          <OtherItems>
            <li><a href="">{t("header.second-item")}</a></li>
            <li><a href="">{t("header.third-item")}</a></li>
            <li><a href="">{t("header.fourth-item")}</a></li>
            <li>
              <select onChange={handleChangeLanguage} defaultValue={i18n.language}>
                <option value="en">English</option>
                <option value="pt">Português(BR)</option>
              </select>
            </li>
          </OtherItems>
        </ul>
      </HeaderContainer>
  )
}
