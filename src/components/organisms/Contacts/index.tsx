import { useTranslation } from "react-i18next";
import { ContactButtons, ContactsSection, EmailButton, HeaderContacts } from "./styles";

interface ContactsProps {
  id?: string;
}

export const Contacts: React.FC<ContactsProps> = ({ id }) => {
  const { t } = useTranslation("global")
  return(
    <ContactsSection id={id}>
      <HeaderContacts>
        <span>{t("contacts.text")}</span>
        <h2>{t("contacts.title")}</h2>
        <EmailButton href="https://t.me/hevelinlima">
          <p>@hevelinlima</p>
          <img src="email.svg" alt="" />
        </EmailButton>
        <div className="span-text">
          <span>{t("contacts.or")}</span>
          <span>{t("contacts.email-me")}</span>
        </div>
      </HeaderContacts>
      <ContactButtons>
        <a href="https://github.com/hevelinlima"><img src="github.svg" alt="" /></a>
        <a href="https://www.linkedin.com/in/hevelin-lima/"><img src="linkedin.svg" alt="" /></a>
        <a href="https://discord.com/users/hevelinl"><img src="discord.svg" alt="" /></a>
      </ContactButtons>
    </ContactsSection>
  )
}
