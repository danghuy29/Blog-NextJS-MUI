import { createTheme } from "@mui/material";
export const darkTheme = createTheme({
  navBG: {
    left: "#136494",
    right: "#5f10a8",
  },
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ["poppin"].join(","),
    logo: {
      fontSize: 26,
      fontWeight: 900,
      color: "#ffffff",
    },
  },
});
