import { createMuiTheme } from "@material-ui/core";
import { primaryColor, secondaryColor } from './getColors';

export default createMuiTheme({
  palette: {
    primary: {
      main: primaryColor
    },
    secondary: {
      main: secondaryColor
    },
  }
})
