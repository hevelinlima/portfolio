import { css } from "styled-components"

export const typography = {
  fonts: {
    titleNav: css`
      font-family: "Expletus Sans", sans-serif;
      font-weight: 700;
      font-size: 3rem;
      line-height: 1.6;
    `,
    textNav: css`
      font-family: "Expletus Sans", sans-serif;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 1.3;
    `,
    titleHero: css`
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.6;
  `,
    textHero: css`
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 1.3;
    `,
    spanHero:css`
      font-family: "Press Start 2P", system-ui;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 1.3;
    `,
    textBody: css`
    font-family: "Expletus Sans", sans-serif;
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 1.6;
  `,
  }
}