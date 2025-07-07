// src/theme/theme.ts
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb",
    },
    secondary: {
      main: "#f59e0b",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#171717",
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: '"IranSans", Arial, sans-serif',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f59e0b",
    },
    background: {
      default: "#121212",
      paper: "#1d1d1d",
    },
    text: {
      primary: "#ededed",
      secondary: "#bbbbbb",
    },
  },
  typography: {
    fontFamily: '"IranSans", Arial, sans-serif',
  },
});
