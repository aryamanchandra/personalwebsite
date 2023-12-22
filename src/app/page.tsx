import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Socialbar from "./components/Socialbar";
import localFont from "next/font/local";
import { projectdata, workdata } from "./data";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Box>
      <Box py={20} sx={{ textAlign: "center" }}>
        <Typography variant="h2" className="SFDisplay.className">
          Hi! I'm Aryaman
        </Typography>
        <Typography
          variant="h6"
          color="primary.light"
          pb={3}
          className="SFText.className"
        >
          Full Stack Developer & UI/UX Designer
        </Typography>
        <Socialbar />
      </Box>
      <Box pt={5}>
        <Typography variant="h4" pb={2}>Selected Projects</Typography>
        <Stack direction="row" flexWrap="wrap">
          {projectdata && projectdata.map((element, index) => (
            <Box key={index} pb={5} sx={{ width: "45%" }}>
              {/* <Typography>Image will come here</Typography> */}
              <Typography variant="h6">{element.title}</Typography>
              <Typography color="#666666" py={1}>
                {element.description}
              </Typography>
              <Button
                sx={{ fontFamily: "__SFTEXT_CAA964", background: "#1c1c1c" }}
              >
                Case Study
              </Button>
            </Box>
          ))}
        </Stack>
      </Box>
      <Box>
        <Typography variant="h4" pt={15}>
          Work Experience
        </Typography>
        {workdata && workdata.map((element, index) => (
          <Box mt={3} p={3} sx={{ border: "1px solid #1c1c1c" }} key={index}>
            <Typography>
              {element.title}, {element.company}
            </Typography>
            <Typography color="primary.light">{element.date}</Typography>
            <Typography color="#666666">{element.description}</Typography>
          </Box>
        ))}
      </Box>
      <Footer />
    </Box>
  );
}
