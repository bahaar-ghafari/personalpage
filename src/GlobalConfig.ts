import { DarkTheme, DefaultTheme } from './Themes'
import { IDictionary } from "./Models/IDictionaryModel";
import { Languages } from './Enums/LanguagesEnum'
import { Themes } from './Enums/ThemeEnum'
import { dictionaryFA } from './Language/DictionaryFA'
import { dictionaryEn } from './Language/DictionaryEN'
import { Theme as ThemeType } from "@material-ui/core";
export interface IGlobalConfig {
  SERVER_DOMAIN: string;
  currentLang: Languages;
  resources: {
    [key in Languages]: IDictionary;
  };
  currentTheme: Themes;
  themes: {
    [key in Themes]: any;
  };
  drawerWidth: number;
}

const GlobalConfig: IGlobalConfig = {
  // TODO: this should be get from .env file
  // SERVER_DOMAIN: process.env.REACT_APP_BASE_URL,
  SERVER_DOMAIN: "",
  // currentLang: process.env.REACT_APP_LANG as Languages,// process.env.SERVER_DOMAIN;
  currentLang: "fa" as Languages,
  resources: {
    [Languages.FA]: dictionaryFA,
    [Languages.EN]: dictionaryEn,
  },
  currentTheme: Themes.Default,
  themes: {
    [Themes.Default]: DefaultTheme,
    [Themes.Dark]: DarkTheme,
  },
  drawerWidth: 240,
};
export const Theme: ThemeType = GlobalConfig.themes[GlobalConfig.currentTheme];
export default GlobalConfig
