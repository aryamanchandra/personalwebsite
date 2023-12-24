import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { notesdata } from "../data";
import Socialbar from "../components/Socialbar";
import Footer from "../components/Footer";

export default function Notes() {
  return (
    <Box>
      <Typography variant="h2" py={5} sx={{fontSize: { xs: "3rem", md: "4rem" }}}>
        Notes
      </Typography>
      {/* {notesdata &&
        notesdata.map((element, index) => (
          <Box mt={3} p={3} sx={{ border: "1px solid #1c1c1c" }} key={index}>
            <Typography variant="h6">{element.title}</Typography>
            <Typography color="primary.light">{element.date}</Typography>
            <Typography color="#666666" pb={2}>{element.description}</Typography>
            <Button
               sx={{ fontFamily: "__SFTEXT_CAA964", background: "#1c1c1c" }}
            >
              Read More
            </Button>
          </Box>
        ))} */}
        <Typography variant="h5" color="#666666">No notes as of now :D</Typography>
      <Footer />
    </Box>
  );
}
