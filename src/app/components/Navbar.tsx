import { Box, Link, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { NavbarButton } from "../../../style";

export default function Navbar() {
  return (
    <Stack direction="row" sx={{padding:"10px"}}>
      <NavbarButton>Aryaman Chandra</NavbarButton>
      <NavbarButton sx={{marginLeft:"auto", color:"white"}}>About</NavbarButton>
      <NavbarButton sx={{marginLeft:"20px", color:"white"}}>Notes</NavbarButton>
    </Stack>
  );
}
