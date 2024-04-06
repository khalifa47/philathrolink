"use client";
import { Raleway } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { lightBlue, orange } from "@mui/material/colors";

const raleway = Raleway({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: raleway.style.fontFamily,
  },
  palette: {
    primary: {
      light: lightBlue[300],
      main: lightBlue[500],
      dark: lightBlue[700],
      contrastText: "#fff",
    },
    secondary: {
      light: orange[300],
      main: orange[500],
      dark: orange[700],
    },
  },
});

export default theme;
