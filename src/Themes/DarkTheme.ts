import { blue, green, orange, red } from '@material-ui/core/colors'
import { createMuiTheme, Theme } from '@material-ui/core/styles'

export const DarkTheme: Theme = createMuiTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: "#0a6dd9",
      light: "#0a6dd9",
      dark: "#001528",

      contrastText: "red",
    },
    secondary: {
      main: "#001528",
      light: "#001528",
      dark: "#001528",

      contrastText: "red",
    },
    error: {
      main: red[500],
      light: red[300],
      dark: red[700],
    },
    warning: {
      main: orange[500],
      light: orange[300],
      dark: orange[700],
    },
    info: {
      main: blue[500],
      light: blue[300],
      dark: blue[700],
    },
    success: {
      main: green[500],
      light: green[300],
      dark: green[700],
    },
  },
});
