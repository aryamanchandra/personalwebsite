import Socialbar from "./Socialbar";
import {
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Link,
  Stack,
  Typography,
} from "@mui/material";

export default function Footer() {
  return (
    <Box py={10}>
      <Typography variant="h4">Get in touch</Typography>
      <Typography color="#666666" pb={3} pt={2}>
        If you’re looking to work with me or want to grab some coffee, feel free
        to email me at <Link href="mailto:aryamanow@gmail.com">aryamanow@gmail.com</Link>.
      </Typography>
      <Socialbar />
    </Box>
  );
}
