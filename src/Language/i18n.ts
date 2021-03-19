import i18n, { Resource } from 'i18next'
import GlobalConfig from '../GlobalConfig'
import { initReactI18next } from 'react-i18next'

const resources: Resource = GlobalConfig.resources

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
