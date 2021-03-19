import { ResourceLanguage } from 'i18next'

export interface IDictionary extends ResourceLanguage {
  verify: string,
  cancel: string,
  TwoStepAuthenticationCode:string,
  code:string
  start:string
  stop:string
}
