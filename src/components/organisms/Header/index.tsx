import { useTranslation } from "react-i18next"
import { FirstItem, HeaderContainer, OtherItems, SelectButton, ToggleButton } from './styles.ts'
import { useState } from "react";

export function Header(){
  const { t, i18n } = useTranslation("global");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang)
  };

  const handleToggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  return(
    <HeaderContainer>
        <ul>
          <FirstItem>
            <li><a href="">{t("header.first-item")}</a></li>
          </FirstItem>
          <OtherItems className={menuOpen ? "open" : ""}>
            <li><a href="">{t("header.second-item")}</a></li>
            <li><a href="">{t("header.third-item")}</a></li>
            <li><a href="">{t("header.fourth-item")}</a></li>
            <li>
              <SelectButton onChange={handleChangeLanguage} defaultValue={i18n.language}>
                <option value="en">EN</option>
                <option value="pt">PT-BR</option>
              </SelectButton>
            </li>
          </OtherItems>
          <ToggleButton onClick={handleToggleMenu}>
            <img src="toggle-button.svg" alt="" />
          </ToggleButton>
        </ul>
      </HeaderContainer>
  )
}
