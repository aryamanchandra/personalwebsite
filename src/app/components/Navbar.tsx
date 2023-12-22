"use client";

import { Box, Link, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Button, styled } from "@mui/material";

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
  return (
    <Stack direction="row" sx={{ padding: "10px" }}>
      <Link href="/">
        <NavbarButton>Aryaman Chandra</NavbarButton>
      </Link>
      <Link sx={{ marginLeft: "auto" }}>
        <NavbarButton>About</NavbarButton>
      </Link>
      <Link href="/photography" sx={{ marginLeft: "20px" }}>
        <NavbarButton>Photography</NavbarButton>
      </Link>
      <Link href="/notes" sx={{ marginLeft: "20px" }}>
        <NavbarButton>Notes</NavbarButton>
      </Link>
    </Stack>
  );
}
