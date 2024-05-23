import { useTranslation } from "react-i18next"
import { HeroContainer, MainContainer } from "./styles"
import headerImage from '/header-image.svg'
import { useEffect, useState } from "react";

export function Hero(){
  const { t } = useTranslation("global")
  const [typedText, setTypedText] = useState("");
  const [restartEffect, setRestartEffect] = useState(false);

  useEffect(() => {
    const text = t("hero.span");
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(()=>{
          setTypedText("");
          setRestartEffect(!restartEffect);
        }, 5000);
      }
    }, 100); 
    return () => clearInterval(interval);
  }, [t, restartEffect]);
  return(
    <HeroContainer> 
      <MainContainer>
        <div>
          <span className="typed-out">{typedText}</span>
          <h3>{t("hero.title")}</h3>
          <p>{t("hero.text")}</p>
        </div>
        <img src={ headerImage } alt="" />
      </MainContainer>
      <div className="separator" />
    </HeroContainer>
  )
}