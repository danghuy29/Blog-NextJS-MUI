import { createTheme } from "@mui/material";
export const lightTheme = createTheme({
  navBG: {
    left: "#ffffff",
    right: "#ffffff",
  },
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: ["poppin"].join(","),
    logo: {
      fontSize: 26,
      fontWeight: 900,
      color: "#000000",
    },
  },
});
