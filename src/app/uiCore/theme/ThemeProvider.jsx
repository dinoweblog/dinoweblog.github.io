import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { theme } from "./theme";

const ThemeProvider = ({ children }) => (
  <MUIThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MUIThemeProvider>
);

export default ThemeProvider;
