"use client"
import { createTheme } from "@mui/material";
import { Button, styled } from "@mui/material";

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
});

const NavbarButton = styled(Button)({
    color: "white",
    backgroundColor: "black !important",
    "&:hover": {
      backgroundColor: "#1c1c1c !important",
    },
  });

  const SocialButton = styled(Button)({
    backgroundColor: "#1c1c1c !important",
    color:"#397a79",
    "&:hover": {
      backgroundColor: "#1c1c1c !important",
    },
  });

export {theme, NavbarButton, SocialButton};