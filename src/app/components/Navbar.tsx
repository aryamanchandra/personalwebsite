"use client";

import {
  Box,
  Link,
  Stack,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Button, styled } from "@mui/material";
import { theme } from "../../../style";

const NavbarButton = styled(Button)({
  color: "white",
  backgroundColor: "black !important",
  fontFamily: "__SFTEXT_CAA964",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#1c1c1c !important",
  },
});

export default function Navbar() {
  const matches = useMediaQuery(theme.breakpoints.up('xs'));
  const check = matches?false:true
  const [visible, setVisible] = useState(check);

  const handleMenuOpen = () => {
    setVisible(!visible);
  };

  return (
    <Stack direction={{sm:"row", xs:"column"}}>
      <Stack direction="row">
      <Link href="/">
        <NavbarButton>Aryaman Chandra</NavbarButton>
      </Link>

      <IconButton
        onClick={handleMenuOpen}
        color="inherit"
        sx={{ display: { xs: "block", sm: "none" }, marginLeft: "auto" }}
      >
        <MenuIcon />
      </IconButton>
      </Stack>
      <Link href="/" sx={{ marginLeft: {sm:"auto", xs:"none"}, display: visible ? "block":"none" }}>
        <NavbarButton>Home</NavbarButton>
      </Link>
      <Link href="/about" sx={{ marginLeft: {sm:"20px", xs:"none"}, display: visible ? "block":"none"  }}>
        <NavbarButton>About</NavbarButton>
      </Link>
      <Link href="/photography" sx={{ marginLeft: {sm:"20px", xs:"none"}, display: visible ? "block":"none"  }}>
        <NavbarButton>Photography</NavbarButton>
      </Link>
      <Link href="/notes" sx={{ marginLeft: {sm:"20px", xs:"none"}, display: visible ? "block":"none"  }}>
        <NavbarButton>Notes</NavbarButton>
      </Link>
    </Stack>
  );
}
