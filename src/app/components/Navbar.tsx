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
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { Button, styled } from "@mui/material";

const NavbarButton = styled(Button)({
  color: "white",
  backgroundColor: "black !important",
  fontFamily: "__SFTEXT_CAA964",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#111111 !important",
  },
});

export default function Navbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    const check = matches ? false : true;
    setVisible(check)
  },[matches]);

  const [visible, setVisible] = useState(true);

  const handleMenuOpen = () => {
    setVisible(!visible);
  };

  return (
    <Stack direction={{ sm: "row", xs: "column" }}>
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
      <Link
        href="/"
        sx={{
          marginLeft: { sm: "auto", xs: "none" },
          display: visible ? "block" : "none",
        }}
      >
        <NavbarButton>Home</NavbarButton>
      </Link>
      <Link
        href="/about"
        sx={{
          marginLeft: { sm: "20px", xs: "none" },
          display: visible ? "block" : "none",
        }}
      >
        <NavbarButton>About</NavbarButton>
      </Link>
      <Link
        href="/photography"
        sx={{
          marginLeft: { sm: "20px", xs: "none" },
          display: visible ? "block" : "none",
        }}
      >
        <NavbarButton>Photography</NavbarButton>
      </Link>
      <Link
        href="/notes"
        sx={{
          marginLeft: { sm: "20px", xs: "none" },
          display: visible ? "block" : "none",
        }}
      >
        <NavbarButton>Notes</NavbarButton>
      </Link>
    </Stack>
  );
}
