import { Box, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import Socialbar from "./components/Socialbar";

export default function Home() {
  return (
    <Box sx={{ width: "40%", marginX: "auto" }}>
      <Navbar />
      <Box pt={5}>
        <Typography variant="h3">Aryaman Chandra</Typography>
        <Typography variant="h6" color="primary.light">
          Full Stack Developer, UI/UX Designer & App Developer
        </Typography>
        <Typography py={2} color="#666666">
          I craft digital products that make a lasting impression. Combining
          clever design with powerful coding, I ensure your business not only
          meets expectations but shines. Ready to transform your idea into a
          memorable customer experience? make it happen, the brandtnew
          way.
        </Typography>
        <Socialbar />
      </Box>
    </Box>
  );
}
