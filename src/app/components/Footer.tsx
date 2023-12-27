import Socialbar from "./Socialbar";
import {
  Box,
  Link,
  Typography,
} from "@mui/material";

export default function Footer() {
  return (
    <Box py={10}>
      <Typography variant="h4">Get in touch</Typography>
      <Typography color="#666666" pb={3} pt={2}>
        If you’re looking to work with me or want to grab some coffee, feel free
        to contact me on any of the links below.
      </Typography>
      <Socialbar />
    </Box>
  );
}
