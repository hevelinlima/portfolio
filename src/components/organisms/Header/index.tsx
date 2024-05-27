import { useTranslation } from "react-i18next";
import { FirstItem, HeaderContainer, OtherItems, SelectButton, ToggleButton } from './styles.ts';
import { useState } from "react";
import { Link } from 'react-scroll';

export function Header() {
  const { t, i18n } = useTranslation("global");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
  };

  const handleToggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  return (
    <HeaderContainer>
      <ul>
        <FirstItem>
          <li>
            <Link to="hero" smooth={true} duration={500}>
              {t("header.first-item")}
            </Link>
          </li>
        </FirstItem>
        <OtherItems className={menuOpen ? "open" : ""}>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              {t("header.second-item")}
            </Link>
          </li>
          <li>
            <Link to="aboutme" smooth={true} duration={500}>
              {t("header.third-item")}
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              {t("header.fourth-item")}
            </Link>
          </li>
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
  );
}
