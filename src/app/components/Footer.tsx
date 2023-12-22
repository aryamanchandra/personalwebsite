import Socialbar from "./Socialbar";
import {
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";

export default function Footer() {
  return (
    <Box py={10}>
      <Typography variant="h4">Get in touch</Typography>
      <Typography color="#666666" pb={2}>
        Got a question or a project idea that could boost your business? I'm
        here to help. Reach out, and let's discuss how we can drive value
        together.
      </Typography>
      <Socialbar />
    </Box>
  );
}
