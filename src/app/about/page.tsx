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
            Im currently a Product Designer at Ramp based in New York City. I
            most recently graduated from Cornell. Before that, I was a Product
            Design Intern at Instagram and a Systems Designer Intern at GitHub.
            I learned my craft by working on side projects with friends and
            guidance from great mentors.
          </Typography>
          <Typography pt={3} color="#666666">
            In my free time, I get my hopes up for the Dallas Mavericks or
            Cowboys winning a championship and drink sweet tea. Im currently
            learning 3D design, reading about tech history, and logging my
            favorite movies. Im inspired by people who seek happiness and create
            joy for others. If that sounds like you, lets grab some chai.
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
