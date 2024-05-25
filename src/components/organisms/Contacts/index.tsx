import { useTranslation } from "react-i18next";
import { ContactsSection } from "./styles";

export function Contacts(){
  const { t } = useTranslation("global")
  return(
    <ContactsSection>
      <span>{t("contacts.text")}</span>
      <h2>{t("contacts.title")}</h2>
      <div>Github</div>
      <div>Discord</div>
      <div>Email</div>
      <div></div>
    </ContactsSection>
  )
}
