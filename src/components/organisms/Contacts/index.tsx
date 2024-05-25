import { useTranslation } from "react-i18next";
import { ContactButtons, ContactsSection, HeaderContacts } from "./styles";

export function Contacts(){
  const { t } = useTranslation("global")
  return(
    <ContactsSection>
      <HeaderContacts>
        <span>{t("contacts.text")}</span>
        <h2>{t("contacts.title")}</h2>
      </HeaderContacts>
      <ContactButtons>
        <a href=""><img src="github.svg" alt="" /></a>
        <a href=""><img src="linkedin.svg" alt="" /></a>
        <a href=""><img src="discord.svg" alt="" /></a>
        <a href=""><img src="email.png" alt="" /></a>
      </ContactButtons>
    </ContactsSection>
  )
}
