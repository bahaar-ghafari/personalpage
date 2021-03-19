import { createMuiTheme, Theme } from '@material-ui/core/styles'

export const DefaultTheme: Theme = createMuiTheme({
  typography: {
    fontFamily: "shabnam",
  },
  direction: "ltr",
  palette: {
    text: {
      primary: "#000000",
      secondary: "#bfbfbf", //color of deactive itemS!if you change it,border of all of items will be changed!such checkbox,redio..
      disabled: "#bfbfbf",
    },
    primary: {
      main: "#0a6dd9",
      light: "#ffffff",
      contrastText: "#bfbfbf",
    },
    secondary: {
      main: "#001528",      //sidebar
      light: "#eff2f7",      //header of table
      contrastText: "#bfbfbf",
    },
    error: {
      main: "#F8615A",
      light: "#f74a4259",

      contrastText: "#ffffff",
    },
    warning: {
      main: "#FFC15E",
      light: "#ffb74559",

      contrastText: "#ffffff",
    },
    success: {
      main: "#00CD7E",
      light: "#00b46e59",
      contrastText: "#00cd7e",
    },
  },
});
