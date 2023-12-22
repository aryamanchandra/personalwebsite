"use client"

import { Box, Link, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Button, styled } from "@mui/material";

const NavbarButton = styled(Button)({
  color: "white",
  backgroundColor: "black !important",
  fontFamily: "__SFTEXT_CAA964",
  textTransform:"capitalize",
  "&:hover": {
    backgroundColor: "#1c1c1c !important",
  },
});

export default function Navbar() {
  return (
    <Stack direction="row" sx={{padding:"10px"}}>
      <NavbarButton>Aryaman Chandra</NavbarButton>
      <NavbarButton sx={{marginLeft:"auto", color:"white"}}>About</NavbarButton>
      <NavbarButton sx={{marginLeft:"20px", color:"white"}}>Photography</NavbarButton>
      <NavbarButton sx={{marginLeft:"20px", color:"white"}}>Notes</NavbarButton>
    </Stack>
  );
}
