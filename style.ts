"use client";
import { createTheme } from "@mui/material";
import { Button, styled } from "@mui/material";
import localFont from "next/font/local";

const SFText = localFont({
  src: "./public/fonts/SF-Pro-Text-Regular.woff",
  variable: "--font-sftext-bold",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#E8E8E8", //light gray
      light: "#397a79", //accent
    },
    secondary: {
      main: "#0F0F0F", //dark
      light: "#F2F9FF", //secondary accent
      dark: "#41557A", //tertiary accent
    },
    info: {
      main: "#666666", //normal text
      light: "#B0B0B0", //light text
    },
    error: {
      main: "#BB0A21", //red
    },
    success: {
      main: "#007D55", //green
    },
  },
  typography: { fontFamily: `${SFText}` },
});

const SocialButton = styled(Button)({
  // backgroundColor: "#1c1c1c !important",
  color: "#397a79",
  fontFamily:`${SFText}`,
  "&:hover": {
    backgroundColor: "#1c1c1c !important",
  },
});

export { theme,  SocialButton };
