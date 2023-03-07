import { createTheme, responsiveFontSizes } from "@mui/material";
import config from "./ThemeConfig";

export const theme = responsiveFontSizes(createTheme(config));
