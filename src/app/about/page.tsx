import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "../components/Footer";

export default function About() {
  return (
    <Box>
      <Typography variant="h2" py={5} sx={{fontSize: { xs: "3rem", md: "4rem" }}}>
        About me
      </Typography>
      <Grid container spacing={1} flexDirection={{ xs: 'column-reverse', sm: 'row', md: 'row' }}>
        <Grid item xs={12} sm={6} md={6}>
          <Typography color="#666666">
            I&apos;m a seasoned Full Stack Developer and UI/UX Designer. I learned my
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
        <Grid item xs={12} sm={6} md={6} textAlign="center">
          <Image
            src="/profile.jpg"
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
