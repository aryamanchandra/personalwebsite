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
      <Typography color="#666666" pb={3}>
        Got a question or a project idea that could boost your business? Im
        here to help. Reach out, and lets discuss how we can drive value
        together.
      </Typography>
      <Socialbar />
    </Box>
  );
}
