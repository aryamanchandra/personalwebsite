import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "../components/Footer";

export default function About() {
  return (
    <Box>
      <Typography variant="h2" py={5}>
        About me
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography color="#666666">
            I'm a seasoned Full Stack Developer and UI/UX Designer. I learned my
            craft by working on freelance, side projects and guidance from great
            mentors. I started off with design and motion design then, moved on
            to full stack web and app development. I love solving problems
            around me with code and design.
          </Typography>
          <Typography pt={3} color="#666666">
            In my free time, I experiment with interesting tech stuff and sleep.
            If you have an interesting idea do hit me up!
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Image
            src="/profile.webp"
            alt="profile"
            width={300}
            height={300}
            style={{ borderRadius: "50px" }}
          />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
