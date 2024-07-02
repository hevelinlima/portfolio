import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import i18next from 'i18next'

import global_en from './translations/en/global.json'
import global_pt from './translations/pt/global.json'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  interpolation: {escapeValue: true},
  lng: "pt",
  resources: {
    en: {
      global: global_en
    },
    pt: {
      global: global_pt
    }
  }
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
