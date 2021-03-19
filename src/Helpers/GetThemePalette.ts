import { PaletteColor } from '@material-ui/core/styles/createPalette'
import { Theme } from "../GlobalConfig";


export const getThemePalette = (
  palette: "primary" | "error" | "warning" | "success"
): PaletteColor => {
  switch (palette) {
    case "primary":
      return Theme.palette.primary;
    case "error":
      return Theme.palette.error;
    case "warning":
      return Theme.palette.warning;
    case "success":
      return Theme.palette.success;
    default:
      return Theme.palette.primary;
  }
};
